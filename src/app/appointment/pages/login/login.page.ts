import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  isLoading: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    private _commonService: CommonService
  ) { 
    this._authService.initBucket();
  }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      username: '',
      password: '',
    });
  }
  login() {
    this.isLoading = true;
    this._authService
      .login(this.loginForm.value.username, this.loginForm.value.password)
      .toPromise()
      .then((res) => {
        this.isLoading = false;
        this.loginForm.reset();
        this._router.navigate(['/appointment/tabs/home']);
      })
      .catch((err) => {
        this.isLoading = false;
        this._commonService.presentToast(err.message, 1500)
      });
  }

}
