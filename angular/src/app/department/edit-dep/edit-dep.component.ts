import { SharedService } from './../../shared.service';
import { Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-dep',
  templateUrl: './edit-dep.component.html',
  styleUrls: ['./edit-dep.component.css'],
})
export class EditDepComponent implements OnInit {
  constructor(private service: SharedService) {}

  @Input() dep: any;
  DepartmentId: string;
  DepartmentName: string;

  ngOnInit(): void {
    this.DepartmentId = this.dep.DepartmentId;
    this.DepartmentName = this.dep.DepartmentName;
  }

  addDepartment() {
    // json format
    var val = {
      DepartmentId: this.DepartmentId,
      DepartmentName: this.DepartmentName,
    };
    this.service.addDep(val).subscribe((resp) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: resp.toString(),
        showConfirmButton: false,
        timer: 1500,
      });
    });
  }
  updateDepartment() {
    // json format
    var val = {
      DepartmentId: this.DepartmentId,
      DepartmentName: this.DepartmentName,
    };
    this.service.updateDep(val).subscribe((resp) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: resp.toString(),
        showConfirmButton: false,
        timer: 1500,
      });
    });
  }
}
