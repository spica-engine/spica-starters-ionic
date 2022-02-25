import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

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
