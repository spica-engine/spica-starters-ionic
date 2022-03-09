import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket'


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  id:any;
  user: DataService.User;
  serie: DataService.Series;
  movie: DataService.Movies;
  clickedSeason: number=0;
  constructor(private _route:ActivatedRoute,private _authService: AuthService,public modalController: ModalController,private _router: Router,private _alertController: AlertController,) { 
    DataService.initialize({ apikey: "fskk1akvi1elv0" })

  }

  async ngOnInit() {
    this.id = this._route.snapshot.params.id;
    this.user = await this._authService.getUser().toPromise()
    await this.getSerie()
    await this.getMovie()
    this.checkAge()
  }
  async getSerie(){
    this.serie = await DataService.series.get(this.id,{queryParams:{relation:true}})    
  }
  async getMovie(){
    this.movie = await DataService.movies.get(this.id,{queryParams:{relation:true}})    
  }
  save(value,id){
      if(this.user){
        if(this.user[value].includes(id)){
          this.user[value] = this.user[value].filter(el =>{
            return el !== id
          })
        }
        else{
          this.user[value].push(id)
        }
         DataService.user.patch({_id:this.user._id,[value]:this.user[value]})
      }
      else{
        this._router.navigateByUrl('video-portal/profile', {
          replaceUrl: true,
        });
      }
  }
  likeDislike(action,value,id){

    if(this.user){
      this.user.liked_movies = this.user.liked_movies || []; 
    this.user.liked_series = this.user.liked_series || []; 
    this.user.disliked_movies = this.user.disliked_movies || [];  
    this.user.disliked_series = this.user.disliked_series || [];  
      
      if(this.user[action+'d_'+value+'s'].includes(id)){
        this.user[action+'d_'+value+'s'] = this.user[action+'d_'+value+'s'].filter((el)=>{
         return  el !== id
        })
      }
      else{
        this.user[action+'d_'+value+'s'].push(id)
      }
      this.user[(action=='like'? 'dislike':'like')+'d_'+value+'s'] = this.user[(action=='like'? 'dislike':'like') +'d_'+value+'s'].filter((el)=>{
        return  el !== id
       })
       if(value == 'movie'){
        DataService.user.patch({_id:this.user._id,liked_movies:this.user.liked_movies,disliked_movies:this.user.disliked_movies})
       }
       else{
        DataService.user.patch({_id:this.user._id,liked_series:this.user.liked_series,disliked_series:this.user.disliked_series})
       }
    }
    else{
      this._router.navigateByUrl('video-portal/profile', {
        replaceUrl: true,
      });
    }
    
  }
  checkAge(){
    if(this.user.eighteen_plus){
      return;
    }
    console.log(this.movie);
    
      if(this.serie.eighteen_plus || this.movie.eighteen_plus){
        this.alertAge()
      }
    
  }
  async alertAge(){
    const alert = await this._alertController.create({
      header: 'Alert',
      message: 'This content is age restricted. If you want to continue click OK.',
      buttons: ['CANCEL', {
        text: 'OK',
        role: 'OK'
      }]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();

    if (role == "OK") {
      await DataService.user.patch({_id:this.user._id,eighteen_plus:true})
    }
    else{
      this._router.navigateByUrl('video-portal/home', {
        replaceUrl: true,
      });
    }
  }
}
