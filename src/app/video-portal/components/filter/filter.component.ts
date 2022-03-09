import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as DataService from '../../services/bucket'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  years: Object = {
    upper:2022,
    lower:2000
  }
  imdb: Object = {
    upper:10,
    lower:0
  }
  genre:any;
  type:any;
  genres:DataService.Genres[]=[];
  constructor(private _modalController: ModalController) {
    DataService.initialize({ apikey: "fskk1akvi1elv0" })
   }

  ngOnInit() {    
    this.getGenres()
  }

  async getGenres(){
    this.genres = await DataService.genres.getAll()
  }
  dismiss(){
    let data = {
      years: this.years,
      imdb: this.imdb,
      genre: this.genre,
      type: this.type
    }
    this._modalController.dismiss(data)
  }
}
