import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './environment';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  setHeader() {
    let header = new HttpHeaders({
      authorization: 'IDENTITY ' + localStorage.getItem('chat_spica_token'),
    });
    return header;
  }
  register(user_data) {
    return this.http.post(`${environment.api_url}/fn-execute/register`, {
      user_data,
      project: 'CHAT',
    });
  }
  setOnline(process, params, user_id) {
    let chatObj = {
      object: process,
      params: params,
      user_id,
    };
    return this.http.post(`${environment.api_url}/fn-execute/online`, chatObj, {
      headers: this.setHeader(),
    });
  }
}
