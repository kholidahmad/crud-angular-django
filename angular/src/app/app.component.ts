import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular';

  constructor(private servis: SharedService) {}

  departmentList: any = [];

  ngOnInit() {
    return this.servis.getDepList().subscribe((data) => {
      this.departmentList = data;
      console.log(data);
    });
  }
}
