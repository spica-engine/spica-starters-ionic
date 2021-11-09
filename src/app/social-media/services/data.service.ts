import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/social-media/services/environment';
import { User } from '../services/bucket';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  setHeader() {
    let header = new HttpHeaders({
      authorization: 'IDENTITY ' + localStorage.getItem('socialmedia_spica_token'),
    });
    return header;
  }
  getExplorePosts(limit: number) {
    return this.http.get(`${environment.api_url}/fn-execute/getExplorePosts`, {
      headers: this.setHeader(),
      params: { limit },
    });
  }
  // getTrendingPosts(skip: number, limit: number, user_id: string) {
  //   return this.http.get(`${environment.api_url}/fn-execute/getTrendingPosts`, {
  //     headers: this.setHeader(),
  //     params: { skip, limit, user_id },
  //   });
  // }
  getExploreUsers(skip: number, limit: number): Observable<User[]> {
    return this.http.get(`${environment.api_url}/fn-execute/getExploreUsers`, {
      headers: this.setHeader(),
      params: { skip, limit },
    }) as Observable<User[]>;
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
  getClassifiedPosts(skip: number, limit: number, user_id: string) {
    return this.http.get(
      `${environment.api_url}/fn-execute/getClassifiedPosts`,
      { headers: this.setHeader(), params: { skip, limit, user_id } }
    );
  }
  deleteAccount(user_id) {
    return this.http.get(`${environment.api_url}/fn-execute/deleteAccount`, {
      headers: this.setHeader(),
      params: { user_id },
    });
  }
}
