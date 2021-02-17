import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  APIUrl = 'http://127.0.0.1:8000/';
  photoUrl = 'http://127.0.0.1:8000/assets/img';

  constructor(private http: HttpClient) {}

  // DEPARTMENT
  getDepList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + 'department/');
  }
  addDep(data: any) {
    return this.http.post(this.APIUrl + 'department/', data);
  }
  updateDep(data: any) {
    return this.http.put(this.APIUrl + 'department/', data);
  }
  deleteDep(data: any) {
    return this.http.delete(this.APIUrl + 'department/' + data);
  }

  // EMPLOYEE
  getEmp(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + 'employee/');
  }

  addEmp(data: any) {
    return this.http.post<any[]>(this.APIUrl + 'employee', data);
  }
  updateEmp(data: any) {
    return this.http.put<any[]>(this.APIUrl + 'department/', data);
  }
  deleteEmp(data: any) {
    return this.http.delete<any[]>(this.APIUrl + 'department/' + data);
  }

  // UPLOAD
  uploadFoto(data: any) {
    return this.http.post<any[]>(this.APIUrl + 'SaveFile', data);
  }
}
