import { Component, OnInit } from '@angular/core';
import { Category, initialize, teacher, Teacher, teacher_speciality, Teacher_Speciality, User } from '../../services/bucket';
import { environment } from '../../services/environment';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { CommonService } from 'src/app/services/common.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  branches: Teacher_Speciality[];
  catagories: Category[];
  teacher: Teacher[];
  loading: boolean=true;
  me: User;

  constructor(
    private _router: Router,
    private _authService: AuthService,
    private _userService: UserService,
    private _commonService: CommonService,
  ) {

    initialize({ identity: localStorage.getItem('fitness_spica_token') });
  }

  ngOnInit() {
    this.getMe()
    this.getBranches();
    this.getTeacher()
  }
  async getBranches() {
    this.branches = await teacher_speciality.getAll({ queryParams: { relation: true } });
    this.branches.forEach((item) => {
      item['sub_category'] = item.categories;
      return item
    }) as any;
  }
  async getTeacher() {
    this.teacher = await teacher.getAll();
  }
  navigateCategory(id) {
    this._router.navigate(['fitness/branch-categories/' + id])
  }
  async login(loginData) {
    this.loading = true;
    this._authService
      .login(loginData.email, loginData.password)
      .toPromise()
      .then(
        (_) => {
          this.me = undefined;
          this.getMe();
        },
        (err) => {
          this.loading = false;
          this._commonService.presentToast(err.message, 1500);
        }
      );
  }

  async register(registerData) {
    this._authService
      .register({ ...registerData })
      .toPromise()
      .then((res) => {
        this.login(registerData);
        this._commonService.presentToast(res['message'], 1500);
      })
      .catch((err) => {
        this._commonService.presentToast(err.error.message, 1500);
      });
  }
  getMe() {
    this._userService.getActiveUser().then(
      async (data: User) => {
        if (data && !this.me) {
          this.me = data;
          this.loading = false;
          this.getBranches();
          this.getTeacher();
        } else this.loading = false;
      },
      (err) => {
        console.log('err :', err);
        this.loading = false;
      }
    );
  }
}