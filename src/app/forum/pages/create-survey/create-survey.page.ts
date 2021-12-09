import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.page.html',
  styleUrls: ['./create-survey.page.scss'],
})
export class CreateSurveyPage{
  user: DataService.User;
  selections: any = [];
  data: boolean;
  surveyTitle: string = '';
  newSurvey: DataService.Survey;

  constructor(
    public navCtrl: NavController,
    private _router: Router,
    private _authService: AuthService
  ) {
    this._authService.initBucket();
  }

  async ionViewWillEnter() {
    this.user = await this._authService.getUser().toPromise();
    if (!this.user) {
      this._router.navigate(['/forum/authorization']);
    }
  }

  async createSurvey() {
    this._router.navigate(['/forum']);
    this.newSurvey = await DataService.survey.insert({
      user: this.user._id,
      title: this.surveyTitle,
      selections: this.selections,
    });
  }

  addSelection() {
    this.selections.push({ option: '' });
  }

  removeSelection() {
    this.selections.pop();
  }
}
