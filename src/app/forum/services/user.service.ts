import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import * as DataService from './bucket';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor(
    private _authService: AuthService,
  ) { }


}
