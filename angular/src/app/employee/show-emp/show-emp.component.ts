import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css'],
})
export class ShowEmpComponent implements OnInit {
  EmployeeList: any = [];
  modalTitle: string = '';
  modeEdit: boolean = false;
  photoPath: string;
  emp: any;

  constructor(private servis: SharedService) {}

  ngOnInit(): void {
    this.refreshEmpList();
  }

  public refreshEmpList() {
    this.servis.getEmp().subscribe((data) => {
      this.EmployeeList = data;
      this.photoPath = this.servis.photoUrl;
    });
  }

  addClick() {
    this.emp = {
      EmployeeId: 0,
      EmployeeName: '',
      Department: '',
      DateOfJoining: '',
      PhotoFileName: 'default.png',
    };
    this.modalTitle = 'Tambah Employee';
    this.modeEdit = true;
  }

  updateClick(data: any) {
    this.emp = data;
    this.modalTitle = 'Edit Employee';
    this.modeEdit = true;
  }

  deleteClick(id) {
    Swal.fire({
      title: 'Yakin Hapus?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, Hapus!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.servis.deleteEmp(id).subscribe((resp) => {
          Swal.fire(resp.toString(), '', 'success');
          this.refreshEmpList();
        });
      }
    });
  }

  closeClick() {
    this.modeEdit = false;
    this.refreshEmpList();
  }
}
