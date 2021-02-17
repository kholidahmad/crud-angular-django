import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './department/department.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEmpComponent } from './employee/edit-emp/edit-emp.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { EditDepComponent } from './department/edit-dep/edit-dep.component';
import { ShowDepComponent } from './department/show-dep/show-dep.component';

const routes: Routes = [
  { path: '', redirectTo: '/department', pathMatch: 'full' },
  {
    path: 'department',
    component: DepartmentComponent,
    // children: [
    //   { path: '', component: ShowDepComponent },
    //   { path: 'dep-add', component: EditDepComponent },
    //   { path: 'id/dep-update', component: EditDepComponent },
    // ],
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    // children: [
    //   { path: '', component: ShowEmpComponent },
    //   { path: 'emp-add', component: EditEmpComponent },
    //   { path: 'id/emp-update', component: EditEmpComponent },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
