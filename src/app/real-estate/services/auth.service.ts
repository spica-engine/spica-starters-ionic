import { Injectable } from '@angular/core';
import * as identity from '@spica-devkit/identity';
import * as DataService from './bucket';
import { HttpClient } from '@angular/common/http';
import { environment } from './environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  activeToken: string;

  constructor(private http: HttpClient) {
    DataService.initialize({ apikey: environment.apikey });
    identity.initialize({
      publicUrl: environment.apiUrl,
      apikey: environment.apikey,
    });
  }

  initBucket() {
    let tokenExpire = localStorage.getItem(environment.EXPIRE_KEY);
    if (tokenExpire && new Date(tokenExpire) < new Date()) {
      localStorage.clear();
    }
    if (localStorage.getItem(environment.TOKEN_KEY)) {
      DataService.initialize({
        identity: localStorage.getItem(environment.TOKEN_KEY),
      });
    } else {
      DataService.initialize({
        apikey: environment.apikey,
      });
    }
  }
}
