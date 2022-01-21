import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import * as DataService from '../../services/bucket'


@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  loading: boolean=true;
  videoId:any;
  video:DataService.Video;
  user: DataService.User;
  paymentForm: any;
  constructor(private _route: ActivatedRoute,private _router:Router,private _authService: AuthService,private _formBuilder: FormBuilder,private toastController:ToastController) { }

  async ngOnInit() {
    this.form()
    this.videoId = this._route.snapshot.params.id;
    this.video = await DataService.video.get(this.videoId,{queryParams:{relation:true}})    
    this.user = await this._authService.getUser().toPromise()
    this.loading=false;
  }

  form(){
    this.paymentForm = this._formBuilder.group({
      card: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(16), Validators.minLength(16), Validators.min(1000000000000000), Validators.max(9999999999999999), Validators.pattern('^[ 0-9]*$')
      ]),],
      date1: ['', Validators.required],
      date2: ['', Validators.required],
      cvv: ['', Validators.compose([
        Validators.required,
        Validators.max(999), Validators.min(100)
      ]),],
    })
  }
  payment(){
    this.loading=true;
    this.user.buyed_videos.push(this.video._id)
    DataService.user.patch({_id:this.user._id,buyed_videos:this.user.buyed_videos})
    this.succsesToast()
    this._router.navigate(['/fitness'], { replaceUrl: true });
  }
  async succsesToast() {
    const toast = await this.toastController.create({
      message: 'Successful.',
      duration: 2000
    });
    toast.present();
  }
}
