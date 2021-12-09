import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket';
import { environment } from '../../services/environment';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.page.html',
  styleUrls: ['./survey.page.scss'],
})
export class SurveyPage {
  survey: DataService.Survey[] = [];
  control: DataService.Survey[] = [];
  user: DataService.User;
  userId: string;
  surveyAnswers = {};

  constructor(private _authService: AuthService, private _router: Router) {
    DataService.initialize({ apikey: '2n1c1akvupiku4' });
  }

  async ionViewWillEnter() {
    this.userId = (await this._authService.getUser().toPromise())?._id;
    if (!this.userId) {
      this._router.navigateByUrl('/forum/authorization', {replaceUrl: true});
    } else{
      await this.getUser();
      this.getSurvey();
    }
  }

  async getUser() {
    this.user = await DataService.user.get(this.userId);
  }
  async _vote(survey, option) {
    let clickedOption = survey.selections.find((el) => {
      return el.option == option;
    });

    let myVote = clickedOption.voter?.find((el) => {
      return el == this.user._id;
    });

    survey.selections.forEach((el) => {
      if (el.voter?.includes(this.user._id)) {
        el.voter = el.voter.filter((voter) => {
          return voter != this.user._id;
        });
      }
      if (el.option == option && !myVote) {
        el.voter = el.voter || [];
        el.voter.push(this.user._id);
      }
    });

    DataService.survey.patch({
      _id: survey._id,
      selections: survey.selections,
    });
  }

  getSurvey() {
    DataService.survey
      .getAll({ queryParams: { relation: true } })
      .then((res) => {
        this.survey = res;
        this.survey.forEach((el) => {
          el.selections.forEach((option) => {
            if (option.voter?.includes(this.user._id)) {
              this.surveyAnswers[el.title] = option.option;
            }
          });
        });
      });
  }
}
