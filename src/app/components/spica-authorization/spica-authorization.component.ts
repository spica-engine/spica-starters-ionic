import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'spica-authorization',
  templateUrl: './spica-authorization.component.html',
  styleUrls: ['./spica-authorization.component.scss'],
})
export class SpicaAuthorizationComponent implements OnInit {
  screen: string = 'login';
  loginForm: FormGroup;
  @Output() clickLogin = new EventEmitter<any>();
  @Output() clickRegister = new EventEmitter<any>();

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      email: '',
      // username: '',
      name: '',
      surname: '',
      password: '',
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
