import { Component, Input, OnInit, Pipe } from '@angular/core';
import { ModalController } from '@ionic/angular';
import * as DataService from '../../services/bucket';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})

export class OrderDetailsComponent implements OnInit {
  
  @Input() id:any;
  order:DataService.Order;
  loading:boolean=true;
  constructor(private modalController: ModalController) { }

  async ngOnInit() {
    this.order = await DataService.order.get(this.id,{queryParams:{relation:['basket.products','basket.products.categories','basket.products.attributes','invoice']}})
    this.loading=false;
    this.order.basket['metadata'].forEach((el)=>{
      if(el.selected_attribute){
        return el.selected_attribute = el.selected_attribute.replace(/[{\\"}]/g,'')
      }
    })
    
    
  }
  dismiss() {
    this.modalController.dismiss()
  }

}
