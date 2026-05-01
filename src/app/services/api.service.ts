import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

 private apiUrl = "https://resume-analyzer.onrender.com/api/";

  constructor(private http: HttpClient) {}

  uploadFile(data: FormData) {
    return this.http.post(this.apiUrl, data);
  }
}