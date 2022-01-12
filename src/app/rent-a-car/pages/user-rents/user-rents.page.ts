import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as DataService from '../../services/bucket'


@Component({
  selector: 'app-user-rents',
  templateUrl: './user-rents.page.html',
  styleUrls: ['./user-rents.page.scss'],
})
export class UserRentsPage implements OnInit {

  isLoading: boolean=true;
  userId: any;
  userRents: DataService.Rent_a_Car[]=[];

  constructor(private _route: ActivatedRoute) { 
    DataService.initialize({ apikey: "fskk1akvi1elv0" })
  }

  ngOnInit() {
    this.userId = this._route.snapshot.params.id;
    this.getRents()
  }

  async getRents(){
    this.userRents = await DataService.rent_a_car.getAll({queryParams:{filter:{user:this.userId},relation:true}})    
    this.isLoading=false;
  }
}
