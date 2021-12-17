import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket'

@Component({
  selector: 'app-consultants',
  templateUrl: './consultants.page.html',
  styleUrls: ['./consultants.page.scss'],
})
export class ConsultantsPage implements OnInit {

  consultants: DataService.Consultant[] = [];

  constructor(private _authService: AuthService) { 
    this._authService.initBucket();
  }

  async ngOnInit() {
    this.consultants = await this.getConsultants();
  }

  getConsultants(){
    return DataService.consultant.getAll();
  }

}
