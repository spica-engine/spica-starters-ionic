import { Component, OnInit } from '@angular/core';
import {
  Category,
  teacher,
  Teacher,
  teacher_speciality,
  Teacher_Speciality,
  User,
} from '../../services/bucket';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  branches: Teacher_Speciality[];
  catagories: Category[];
  teacher: Teacher[];
  loading: boolean = true;
  me: User;

  constructor(
    private _router: Router,
    private _authService: AuthService,
    private _commonService: CommonService
  ) {
    this._authService.initBucket();
  }

  ngOnInit() {
    this.getMe();
    // this.getBranches();
    // this.getTeacher()
  }
  async getBranches() {
    this.branches = await teacher_speciality.getAll({
      queryParams: { relation: true },
    });
    this.branches.forEach((item) => {
      item['sub_categories'] = item.categories;
      return item;
    }) as any;
  }
  async getTeacher() {
    this.teacher = await teacher.getAll();
  }
  navigateCategory(id) {
    this._router.navigate(['fitness/branch-categories/' + id]);
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
      .then((res) => {
        this.login(registerData);
        this._commonService.presentToast(res['message'], 1500);
      })
      .catch((err) => {
        this._commonService.presentToast(err.error.message, 1500);
      });
  }
  getMe() {
    this._authService
      .getUser()
      .toPromise()
      .then(
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
