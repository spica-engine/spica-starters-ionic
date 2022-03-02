import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as DataService from '../../services/bucket'


@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.page.html',
  styleUrls: ['./series-detail.page.scss'],
})
export class SeriesDetailPage implements OnInit {

  id:any;
  serie: DataService.Series;
  clickedSeason: number;
  constructor(private _route:ActivatedRoute) { 
    DataService.initialize({ apikey: "fskk1akvi1elv0" })

  }

  ngOnInit() {
    this.id = this._route.snapshot.params.id;
    this.getSerie()
  }
  async getSerie(){
    this.serie = await DataService.series.get(this.id,{queryParams:{relation:true}})
    console.log(this.serie);
    
  }
}
