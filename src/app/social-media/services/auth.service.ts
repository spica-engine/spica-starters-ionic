import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import jwt_decode from "jwt-decode";
import { Platform } from "@ionic/angular";
import { DataService } from "./data.service";
import { environment } from "./environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private http: HttpClient,
    public platform: Platform,
    private dataService: DataService
  ) {}

  login(userObj: Object) {
    return this.http
      .post(`${environment.api_url}fn-execute/login`, {
        user: userObj,
      })
      .pipe(
        tap((res) => {
          if (res && res["socialmedia_spica_token"]) {
            localStorage.setItem("socialmedia_spica_token", res["socialmedia_spica_token"]);
          } else {
            return;
          }
        })
      );
  }
  async deleteAccont(user_id) {
    await this.dataService.deleteAccount(user_id).toPromise();
  }

  getToken() {
    return localStorage.getItem("socialmedia_spica_token");
  }

  getDecodeToken() {
    let decoded;
    try {
      decoded = jwt_decode(this.getToken());
    } catch (error) {
      console.log("Jwt error ", error);
    }
    return decoded;
  }

  getIdentityId() {
    return this.getDecodeToken()?._id || null;
  }

  logOut() {
    localStorage.clear();
    window.location.href = "/";
  }
}
