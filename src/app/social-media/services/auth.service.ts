import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import jwt_decode from "jwt-decode";
import { Observable, of } from "rxjs";
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

  // async loginWithGoogle(): Promise<any> {
  //   if (
  //     (this.platform.is("android") || this.platform.is("ios")) &&
  //     !this.platform.is("mobileweb")
  //   ) {
  //     //native
  //     console.log("NATIVE LOGIN");
  //     const result = await this.googlePlus.login({
  //       scopes: "profile email",
  //       webClientId: "905633043065-sv0uusv77b8qsvmoc7o8sg4aq0krgb5u.apps.googleusercontent.com"
  //     });
  //     let standartObj = {
  //       email: result.email || "",
  //       firstName: result.givenName || "",
  //       lastName: result.familyName || "",
  //       id: result.userId,
  //       provider: "GOOGLE",
  //       photoUrl: result?.imageUrl,
  //     };
  //     return standartObj;
  //   } else {
  //     //web
  //     console.log("WEB LOGIN");
  //     return this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  //   }
  // }

  // async loginWithFB(): Promise<any> {
  //   if (
  //     this.platform.is("android") ||
  //     (this.platform.is("ios") && !this.platform.is("mobileweb"))
  //   ) {
  //     //native
  //     const result: FacebookLoginResponse = await this.fb.login([
  //       "public_profile",
  //       "email",
  //     ]);
  //     const profile = await this.fb.api(
  //       "me?fields=id,email,first_name,last_name,picture",
  //       []
  //     );

  //     let standartObj = {
  //       email: profile.email || "",
  //       firstName: profile.first_name || "",
  //       lastName: profile.last_name || "",
  //       id: profile.id,
  //       provider: "FACEBOOK",
  //       photoUrl: profile.picture?.data?.url,
  //     };
  //     return standartObj;
  //   } else {
  //     //web
  //     return this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  //   }
  // }
  // async loginWithApple() {
  //   const result = (await this.signInWithApple
  //     .signin({
  //       requestedScopes: [
  //         ASAuthorizationAppleIDRequest.ASAuthorizationScopeFullName,
  //         ASAuthorizationAppleIDRequest.ASAuthorizationScopeEmail,
  //       ],
  //     })
  //     .catch((error: AppleSignInErrorResponse) => {
  //       console.error(error);
  //     })) as AppleSignInResponse;
  //   let standartObj = {
  //     email: result.email || "",
  //     firstName: result.fullName.givenName || "",
  //     lastName: result.fullName.familyName || "",
  //     id: result.user,
  //     provider: "APPLE",
  //     photoUrl: undefined,
  //   };
  //   return standartObj;
  // }

  logOut() {
    localStorage.clear();
    window.location.href = "/";
  }

  isAuthenticated(): Observable<boolean> {
    if (
      this.getDecodeToken() &&
      new Date() < new Date(this.getDecodeToken().exp * 1000)
    ) {
      return of(true);
    }
    return of(false);
  }
}
