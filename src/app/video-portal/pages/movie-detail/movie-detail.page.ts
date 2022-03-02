import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as DataService from '../../services/bucket'

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {

  id:any;
  movie: DataService.Movies;
  constructor(private _route:ActivatedRoute) { 
    DataService.initialize({ apikey: "fskk1akvi1elv0" })
  }

  ngOnInit() {
    this.id = this._route.snapshot.params.id;
    this.getMovie()
  }
  async getMovie(){
    this.movie = await DataService.movies.get(this.id,{queryParams:{relation:true}})
    console.log(this.movie);
    
  }
}
