import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilterComponent } from '../../components/filter/filter.component';
import * as DataService from '../../services/bucket'

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  isLoading: boolean = true;
  searchItems: any;
  constructor(private _modalController: ModalController) {
    DataService.initialize({ apikey: "fskk1akvi1elv0" })
  }

  async ngOnInit() {
    await this.getItems();
    this.isLoading = false;
  }
  async filterModal() {
    const modal = await this._modalController.create({
      component: FilterComponent,
      cssClass: 'my-custom-class',
      swipeToClose: true,
    });
    modal.onDidDismiss().then(async (value)=>{
      let data = value.data
      if(!data){        
        return;
      }
      if(data['type']== 'movie'){
        this.isLoading=true;
        if(data['genre']){
          data['genre'] = Array(data['genre'])        
          this.searchItems = await DataService.movies.getAll({ queryParams: { limit: 10 ,filter:{genres:{$in:data['genre']}}} })
          if(data['years']){            
            this.searchItems = this.searchItems.filter((el)=>{
              Number(el['year_of_construction']);
              return el['year_of_construction'] >= data['years'].lower && el['year_of_construction'] <=  data['years'].upper
            })
          }
          if(data['imdb']){            
            this.searchItems = this.searchItems.filter((el)=>{
              Number(el['imdb_score']);
              return el['imdb_score'] >= data['imdb'].lower && el['imdb_score'] <=  data['imdb'].upper
            })
          }
        }
        else{
          this.searchItems = await DataService.movies.getAll({ queryParams: { limit: 10 } })
          if(data['years']){            
            this.searchItems = this.searchItems.filter((el)=>{
              Number(el['year_of_construction']);
              return el['year_of_construction'] >= data['years'].lower && el['year_of_construction'] <=  data['years'].upper
            })
          }
          if(data['imdb']){            
            this.searchItems = this.searchItems.filter((el)=>{
              Number(el['imdb_score']);
              return el['imdb_score'] >= data['imdb'].lower && el['imdb_score'] <=  data['imdb'].upper
            })
          }
        }
       
        this.isLoading=false;
      }
      if(data['type']== 'serie'){
        this.isLoading=true;
        if(data['genre']){
          data['genre'] = Array(data['genre'])        
          this.searchItems = await DataService.series.getAll({ queryParams: { limit: 10 ,filter:{genres:{$in:data['genre']}}} })
          if(data['years']){            
            this.searchItems = this.searchItems.filter((el)=>{
              Number(el['year_of_construction']);
              return el['year_of_construction'] >= data['years'].lower && el['year_of_construction'] <=  data['years'].upper
            })
          }
          if(data['imdb']){            
            this.searchItems = this.searchItems.filter((el)=>{
              Number(el['imdb_score']);
              return el['imdb_score'] >= data['imdb'].lower && el['imdb_score'] <=  data['imdb'].upper
            })
          }
        }
        else{
          this.searchItems = await DataService.series.getAll({ queryParams: { limit: 10 } })
          if(data['years']){            
            this.searchItems = this.searchItems.filter((el)=>{
              Number(el['year_of_construction']);
              return el['year_of_construction'] >= data['years'].lower && el['year_of_construction'] <=  data['years'].upper
            })
          }
          if(data['imdb']){            
            this.searchItems = this.searchItems.filter((el)=>{
              Number(el['imdb_score']);
              return el['imdb_score'] >= data['imdb'].lower && el['imdb_score'] <=  data['imdb'].upper
            })
          }
        }
       
        this.isLoading=false;
      }
      if(data['type']== undefined){
        this.isLoading=true;
        await this.getItems()
        if(data['genre']){
          data['genre'] = Array(data['genre'])                  
          let arr1 = await DataService.series.getAll({ queryParams: { limit: 10 ,filter:{genre:{$in:data['genre']}}} })
          let arr2 = await DataService.movies.getAll({ queryParams: { limit: 10 ,filter:{genres:{$in:data['genre']}}} })

          this.searchItems = arr1.concat(arr2)
        }
        if(data['years']){            
          this.searchItems = this.searchItems.filter((el)=>{
            Number(el['year_of_construction']);
            return el['year_of_construction'] >= data['years'].lower && el['year_of_construction'] <=  data['years'].upper
          })
        }
        if(data['imdb']){            
          this.searchItems = this.searchItems.filter((el)=>{
            Number(el['imdb_score']);
            return el['imdb_score'] >= data['imdb'].lower && el['imdb_score'] <=  data['imdb'].upper
          })
        }
        this.isLoading=false;
      }
    })
    return await modal.present();
  }
  async getItems() {
    let arr1 = await DataService.series.getAll({ queryParams: { limit: 10 } })
    let arr2 = await DataService.movies.getAll({ queryParams: { limit: 10 } })
    this.searchItems = arr1.concat(arr2)
  }
  async search(value){
    this.isLoading = true;
    this.searchItems = '' || []

    if(value){
      let data = await DataService.movies.getAll({
        queryParams: {
          filter: {
            $or: [
              { title: { $regex: value, $options: 'i' } },
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
              { title: { $regex: value, $options: 'i' } },
            ],
          },
          limit: 7,
        },
      });
      if(data2.length){
        data2.forEach(el =>{return this.searchItems.push({title:el.title,_id:el._id,cover:el.cover})})
      }      
    }
    else{
      await this.getItems()
    }
    this.isLoading=false;
  }
}
