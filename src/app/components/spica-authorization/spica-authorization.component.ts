import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'spica-authorization',
  templateUrl: './spica-authorization.component.html',
  styleUrls: ['./spica-authorization.component.scss'],
})
export class SpicaAuthorizationComponent implements OnInit {
  screen: string = 'login';
  loginForm: FormGroup;
  isPasswordVisible: boolean = false;
  @Output() clickLogin = new EventEmitter<any>();
  @Output() clickRegister = new EventEmitter<any>();

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      // username: '',
      name: '',
      surname: '',
      password: ['', [Validators.required, Validators.minLength(5)]],
      termsOfUse: '',
    });
  }
  login() {
    this.clickLogin.emit(this.loginForm.value);
    this.loginForm.reset();
  }
  register() {
    let registerData = this.loginForm.value;
    delete registerData['termsOfUse'];
    this.clickRegister.emit(registerData);
    this.loginForm.reset();
  }
}
