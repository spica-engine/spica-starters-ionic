import { Injectable } from '@angular/core';
import * as identity from '@spica-devkit/identity';
import {User, initialize, user} from './bucket';
import jwt_decode from 'jwt-decode';
import { from, Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  activeUser: User;
  activeToken: string;

  constructor(private http: HttpClient) {
    initialize({ apikey: environment.apikey });
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
      initialize({
        identity: localStorage.getItem(environment.TOKEN_KEY),
      });
    } else {
      initialize({
        apikey: environment.apikey,
      });
    }
  }

  login(identifier, password) {
    return from(identity.login(identifier, password)).pipe(
      tap(async (token) => {
        localStorage.setItem(environment.TOKEN_KEY, token);

        let date = new Date();
        date.setDate(date.getDate() + 2); // 2 days later
        localStorage.setItem(environment.EXPIRE_KEY, String(date));
        this.activeToken = token;
      }),
      switchMap(() => this.getUser())
    );
  }

  logout() {
    this.activeUser = undefined;
    localStorage.removeItem(environment.TOKEN_KEY)
  }

  register(user_data) {
    return this.http
      .post(`${environment.apiUrl}/fn-execute/register`, {
        user_data,
        project:"DATING"
      })
      .toPromise();
  }

  forgotPassword(identity_id: string) {
    return this.http
      .get(
        `${environment.apiUrl}/fn-execute/forgot-password?identity_id=${identity_id}`
      )
      .toPromise();
  }

  sendForgotPasswordEmail(email: string) {
    return this.http
      .post(`${environment.apiUrl}/fn-execute/sendMailForForgotPassword`, {
        email,
      })
      .toPromise();
  }

  changePassword(identity_id: string, password: string) {
    return this.http
      .post(`${environment.apiUrl}/fn-execute/change-password`, {
        identity_id,
        password,
      })
      .toPromise();
  }

  changeEmail(identity_id: string, email: string) {
    return this.http
      .post(`${environment.apiUrl}/fn-execute/change-email`, {
        identity_id,
        email,
      })
      .toPromise();
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem(environment.TOKEN_KEY) ? true : false;
  }

  getActiveToken(): any {
    return this.tokenDecode(localStorage.getItem(environment.TOKEN_KEY));
  }

  private tokenDecode(token) {
    if (token) return jwt_decode(token);
    return false;
  }

  //Gets user info after taking token stored in local storage
  getUser(clean: boolean = false): Observable<User> {
    if (this.activeUser && !clean) return of(this.activeUser);
    return of(this.getActiveToken()).pipe(
      switchMap((token) =>
        token
          ? user.getAll({
              queryParams: { filter: { identity_id: token._id } },
            })
          : of([null])
      ),
      map((users) => users[0]),
      tap((user) => (this.activeUser = user))
    );
  }

  checkCurrentPassword(identifier, password) {
    return identity.login(identifier, password);
  }

  isAuthenticated(): Observable<boolean> {
    let result: boolean = true;
    if (
      localStorage.getItem(environment.EXPIRE_KEY) &&
      new Date() > new Date(localStorage.getItem(environment.EXPIRE_KEY))
    )
      result = false;
    return of(result);
  }

  setHeader() {
    let header = new HttpHeaders({
      authorization: 'IDENTITY ' + localStorage.getItem(environment.TOKEN_KEY),
    });
    return header;
  }

  setOnline(process, params, user_id) {
    let chatObj = {
      object: process,
      params: params,
      user_id,
    };
    return this.http.post(`${environment.apiUrl}/fn-execute/dating-online`, chatObj, {
      headers: this.setHeader(),
    });
  }
}
