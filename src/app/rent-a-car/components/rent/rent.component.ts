import { Component, Input, OnInit } from '@angular/core';
import { Validators, FormBuilder} from '@angular/forms';
import * as DataService from '../../services/bucket'
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.scss'],
})
export class RentComponent implements OnInit {
  @Input() carId: any;
  rentForm: any;
  office: DataService.Office[] = [];
  today: any;
  car: DataService.Cars;

  constructor(private _formBuilder: FormBuilder, private _route: Router, private modalController: ModalController) { }

   async ngOnInit() {
    this.getOffice();
    this.rentForm = this._formBuilder.group({
      office_to_take: ['', Validators.required],
      office_to_be_given: ['', Validators.required],
      start: ['', Validators.required],
      end: ['', Validators.required],
    })
    let date = new Date();
    date.setSeconds(0)
    this.today = date.toISOString().split(".")[0]
     if(this.carId){
      this.car = await DataService.cars.get(this.carId)
    }
  }
  getOffice() {
    DataService.office.getAll({ queryParams: { relation: true } }).then((res) => {
      this.office = res;
    })
  }
  navigate() {
    this.modalController.dismiss();
    if(this.car){
      this._route.navigate(['rent-a-car/extras'], {queryParams: {...this.rentForm.value,car:this.car?._id,price:this.car?.price}});
    }
    else{
      this._route.navigate(['rent-a-car/car-selection'], {queryParams: {...this.rentForm.value,car:this.car?._id,price:this.car?.price}});
    }
  }
  dismiss(){
    this.modalController.dismiss();
  }
  calculate() {
    var time = new Date(this.rentForm.value.start).getTime() - new Date(this.rentForm.value.end).getTime();
    var diffDays = Math.ceil(time / (1000 * 3600 * 24));        
    if(diffDays > 0){
      this.rentForm.controls.end.setValue(this.rentForm.value.start)
    }
    else if(diffDays<=0){
    }    
  }
}
