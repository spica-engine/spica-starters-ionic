import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/social-media/services/environment';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  setHeader() {
    let header = new HttpHeaders({
      authorization:
        'IDENTITY ' + localStorage.getItem('socialmedia_spica_token'),
    });
    return header;
  }
  getExplorePosts(limit: number) {
    return this.http.get(`${environment.api_url}/fn-execute/getExplorePosts`, {
      headers: this.setHeader(),
      params: { limit },
    });
  }
  register(user_data) {
    return this.http.post(`${environment.api_url}/fn-execute/register`, {
      user_data,
      project: 'SOCIAL_MEDIA',
    });
  }
  setOnline(process, params, user_id) {
    let chatObj = {
      object: process,
      params: params,
      user_id,
    };
    return this.http.post(`${environment.api_url}/fn-execute/socialOnline`, chatObj, {
      headers: this.setHeader(),
    });
  }
}
