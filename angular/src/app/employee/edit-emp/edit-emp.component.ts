import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css'],
})
export class EditEmpComponent implements OnInit {
  constructor(private service: SharedService) {}

  @Input() emp: any;
  EmployeeId: number;
  EmployeeName: string;
  Department: string;
  DateOfJoining: string;
  PhotoFileName: string;
  PhotoFilePath: string;
  namaDep: any = [];

  ngOnInit(): void {
    this.EmployeeId = this.emp.EmployeeId;
    this.EmployeeName = this.emp.EmployeeName;
    this.Department = this.emp.Department;
    this.DateOfJoining = this.emp.DateOfJoining;
    this.PhotoFileName = this.emp.PhotoFileName;
    this.PhotoFilePath = this.service.photoUrl + this.PhotoFileName;
    this.loadDepName();
  }

  loadDepName() {
    this.service.getDepList().subscribe((data) => {
      data.map((d) => {
        this.namaDep.push(d.DepartmentName);
      });
    });
  }

  addEmployee() {
    var val = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      DateOfJoining: this.DateOfJoining,
      PhotoFileName: this.PhotoFileName,
    };
    this.service.addEmp(val).subscribe((resp) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: resp.toString(),
        showConfirmButton: false,
        timer: 1500,
      });
    });
  }
  updateEmployee() {
    var val = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      DateOfJoining: this.DateOfJoining,
      PhotoFileName: this.PhotoFileName,
    };
    this.service.updateEmp(val).subscribe((resp) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: resp.toString(),
        showConfirmButton: false,
        timer: 1500,
      });
    });
  }

  UploadPhoto(event) {
    const file = event.target.files[0];
    const form: FormData = new FormData();
    form.append('uploadedFile', file, file.name);
    this.service.uploadFoto(form).subscribe((data) => {
      this.PhotoFileName = data.toString();
      this.PhotoFilePath = this.service.photoUrl + this.PhotoFileName;
    });
  }
}
