import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  slideOpts = {
    slidesPerView: 3,
    spaceBetween: 25,
    speed: 500,
    autoplay: true,
  }
  constructor() { }

  ngOnInit() {
  }

}
