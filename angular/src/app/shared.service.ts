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

  getDepList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + 'department/');
  }
}
