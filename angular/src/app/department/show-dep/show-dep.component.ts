import { SharedService } from './../../shared.service';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css'],
})
export class ShowDepComponent implements OnInit {
  DepartmentList: any = [];
  modalTitle: string = '';
  modeEdit: boolean = false;
  dep: any;
  // @Output() dep = new EventEmitter<{DepartmentId: number, DepartmentName: string}>();

  constructor(private servis: SharedService) {}

  ngOnInit(): void {
    this.refreshDepList();
  }

  public refreshDepList() {
    this.servis.getDepList().subscribe((data) => {
      this.DepartmentList = data;
    });
  }

  addClick() {
    this.dep = {
      DepartmentId: 0,
      DepartmentName: '',
    };
    this.modalTitle = 'Tambah Department';
    this.modeEdit = true;
  }

  updateClick(data: any) {
    this.dep = data;
    this.modalTitle = 'Edit Department';
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
        this.servis.deleteDep(id).subscribe((resp) => {
          Swal.fire('Deleted!', resp.toString(), 'success');
          this.refreshDepList();
        });
      }
    });
  }

  closeClick() {
    this.modeEdit = false;
    this.refreshDepList();
  }
}
