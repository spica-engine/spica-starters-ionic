import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditAddressComponent } from '../../components/edit-address/edit-address.component';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.page.html',
  styleUrls: ['./addresses.page.scss'],
})
export class AddressesPage implements OnInit {

  user:DataService.User;
  addres:any;
  loading:boolean=true;

  constructor(private _authService: AuthService,private modalController: ModalController) { 
    this._authService.initBucket();
  }

  async ngOnInit() {
    this.user = await this._authService.getUser().toPromise()
    this.addres = this.user.address
    this.loading = false;
    
  }
  async edit(address,idx){    
    const modal = await this.modalController.create({
      component: EditAddressComponent,
      swipeToClose: true,
      componentProps:{
        data: address,
        index: idx
      }
    });
    return await modal.present();
  }
    
}
