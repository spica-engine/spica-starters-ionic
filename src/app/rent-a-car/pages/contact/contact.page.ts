import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import * as DataService from '../../services/bucket'


@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  contactForm: any;
  newContact: DataService.Contact;
  isLoading: boolean=true;

  constructor(private _formBuilder: FormBuilder,private _router: Router,private toastController: ToastController) {
    DataService.initialize({ apikey: "fskk1akvi1elv0" })
   }

  async ngOnInit() {

    this.contactForm = this._formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      mail: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ]),],
      message: ['', Validators.required],
    })
    this.isLoading=false;
  }
  async send(){
    this.isLoading=true;
    this.newContact = await DataService.contact.insert(this.contactForm.value)
    this.presentToast()
    this._router.navigateByUrl('/rent-a-car/home', {
      replaceUrl: true,
    });
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Successfully sent.',
      duration: 2000
    });
    toast.present();
  }
}
