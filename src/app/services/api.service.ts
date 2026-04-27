import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://127.0.0.1:8000/api/analyze/';

  constructor(private http: HttpClient) {}

  uploadFile(data: FormData) {
    return this.http.post(this.apiUrl, data);
  }
}