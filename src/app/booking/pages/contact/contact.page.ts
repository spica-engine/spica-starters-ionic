import { Component, OnInit } from '@angular/core';
import * as DataService from '../../services/bucket';
import { environment } from '../../services/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  site_configurations: DataService.Site_Configurations;

  constructor() {
    DataService.initialize({ apikey: environment.public_apikey });
  }

  async ngOnInit() {
    let data = await this.getSiteConfigurations();
    this.site_configurations = data[0];
  }

  async getSiteConfigurations() {
    return DataService.site_configurations.getAll();
  }
}
