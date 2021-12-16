import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';
import { Platform } from '@ionic/angular';
import { DataService } from './data.service';
import * as identity from '@spica-devkit/identity';
import { environment } from './environment';
import { from } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    public platform: Platform,
    private _dataService: DataService,
    private _router: Router
  ) {
    identity.initialize({
      publicUrl: environment.api_url,
      apikey: environment.public_apikey,
    });
  }
  login(identifier, password) {
    return from(identity.login(identifier, password)).pipe(
      tap((token) => {
        if (token) {
          localStorage.setItem('socialmedia_spica_token', token);
          let date = new Date();
          date.setDate(date.getDate() + 2); // 2 days later
          localStorage.setItem('socialmedia_spica_expire', String(date));
        } else return;
      })
    );
  }
  register(user_data) {
    return this._dataService.register(user_data);
  }

  getToken() {
    return localStorage.getItem('socialmedia_spica_token');
  }

  getDecodeToken() {
    let decoded;
    try {
      decoded = jwt_decode(this.getToken());
    } catch (error) {
      console.log('Jwt error ', error);
    }
    return decoded;
  }

  getIdentityId() {
    return this.getDecodeToken()?._id || null;
  }

  logOut() {
    localStorage.removeItem('socialmedia_spica_token');
    localStorage.removeItem('socialmedia_user_id');
    this._router.navigate(['/home'], { replaceUrl: true });
  }
}
