import { Component, OnInit } from '@angular/core';
import { initialize } from '../../services/bucket';
import { environment } from '../../services/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor() {
    initialize({ apikey: environment.public_apikey });
  }
  loading: boolean = true;
  ngOnInit() {
    setTimeout(() => {
      this.loading=false
    }, 1000);
  }
}
