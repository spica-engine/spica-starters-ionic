import { Component, OnInit } from '@angular/core';
import * as DataService from '../../services/bucket'


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
  mainMovies: any;
  mainSeries: any;
  movies: DataService.Movies[]=[];
  series: DataService.Series[]=[];
  genres: DataService.Genres[]=[];
  searchItems: any;
  searchTerm:any;
  constructor() {
    DataService.initialize({ apikey: "fskk1akvi1elv0" })
   }

  ngOnInit() {
    this.getMain()
    this.getMoviesAndSeries()
    this.getGenres()
  }

  async getMain(){
    await DataService.site_configurations.getAll({queryParams: {relation:true}}).then(el =>{
      this.mainMovies = el[0].home_movies
      this.mainSeries = el[0].home_series
    })
  }
  async getMoviesAndSeries(){
    this.movies = await DataService.movies.getAll({queryParams:{limit:6}})
    this.series = await DataService.series.getAll({queryParams:{limit:6}})
  }
  async getGenres(){
    this.genres = await DataService.genres.getAll()
  }
  async search(terms) {
    this.searchItems = '' || []
    if(terms){
      let data = await DataService.movies.getAll({
        queryParams: {
          filter: {
            $or: [
              { title: { $regex: terms, $options: 'i' } },
            ],
          },
          limit: 7,
        },
        
      });
      
      if(data.length){
        data.forEach(el =>{return this.searchItems.push({title:el.title,_id:el._id,cover:el.cover})})
      }
      let data2 = await DataService.series.getAll({
        queryParams: {
          filter: {
            $or: [
              { title: { $regex: terms, $options: 'i' } },
            ],
          },
          limit: 7,
        },
      });
      if(data2.length){
        data2.forEach(el =>{return this.searchItems.push({title:el.title,_id:el._id,cover:el.cover})})
      }      
    }
  }
}
