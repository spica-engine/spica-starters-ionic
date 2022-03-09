import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
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
  isLoading: boolean = true;
  user: DataService.User;
  mainMovies: any;
  mainSeries: any;
  movies: DataService.Movies[]=[];
  series: DataService.Series[]=[];
  genres: DataService.Genres[]=[];
  searchItems: any;
  searchTerm:any;
  movieLimit: number=6;
  serieLimit: number=6;
  serieLoading: boolean;
  movieLoading: boolean;
  constructor(private _authService: AuthService) {
    DataService.initialize({ apikey: "fskk1akvi1elv0" })
   }

  async ngOnInit() {
    this.user = await this._authService.getUser().toPromise()
    await this.getMain()
    await this.getMovies()
    await this.getSeries()
    await this.getGenres()
    this.isLoading=false;
  }

  async getMain(){
    await DataService.site_configurations.getAll({queryParams: {relation:true}}).then(el =>{
      this.mainMovies = el[0].home_movies
      this.mainSeries = el[0].home_series
    })
  }
  async getMovies(){
    this.movieLoading=true;
    this.movies = await DataService.movies.getAll({queryParams:{limit:this.movieLimit}})
    this.movieLoading=false;
  }
  async getSeries(){
    this.serieLoading=true;
    this.series = await DataService.series.getAll({queryParams:{limit:this.serieLimit}})
    
    this.serieLoading=false;
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
