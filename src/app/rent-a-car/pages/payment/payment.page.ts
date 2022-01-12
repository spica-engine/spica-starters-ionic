import { Component, OnInit} from '@angular/core';
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

  user: DataService.User;
  data: any;
  paymentForm: any;
  checkDate: any;
  newRent: DataService.Rent_a_Car;
  clicked: boolean=false;

  constructor(private _formBuilder: FormBuilder, public toastController: ToastController, private _route: ActivatedRoute, private _router: Router, private _authService: AuthService) {
    DataService.initialize({ apikey: "fskk1akvi1elv0" })
  }

  async ngOnInit() {


    this._route.queryParams.subscribe((res) => {
      this.data = res;
    })
    this.data = JSON.parse(JSON.stringify(this.data))
    this.form()
    await this.getUser();
  }
  async getUser() {
    this.user = await this._authService.getUser().toPromise();
  }
  form() {
    this.paymentForm = this._formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      mail: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ]),],
      passport: ['', Validators.compose([
        Validators.required,
        Validators.min(10000000000), Validators.max(99999999999), Validators.pattern('^[ 0-9]*$'),
      ]),],
      phone: ['', Validators.compose([
        Validators.required, Validators.pattern('^[ 0-9]*$')
      ]),],
      birthday: ['', Validators.required],
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
  async payment() {
    this.clicked = true;
    if(this.clicked){
      this.data.price = Number(this.data.totalPrice)
      this.data.start = new Date(this.data.start)
      this.data.end = new Date(this.data.end)
      this.data.packets = this.data.packets || []
      this.data.additional_products = this.data.additional_products || []
      this.data['name'] = this.paymentForm.value.name;
      this.data['surname'] = this.paymentForm.value.surname;
      this.data['passport'] = String(this.paymentForm.value.passport);
      this.data['birthday'] = new Date(this.paymentForm.value.birthday);
      if (this.user) {
        this.data['user'] = this.user._id
      }
      this.newRent = await DataService.rent_a_car.insert(this.data)
      const toast = await this.toastController.create({
        message: 'PAYMENT SUCCESSFUL',
        duration: 2500
      });
      toast.present();
      if (this.newRent){ 
        this._router.navigateByUrl('/rent-a-car/home', {
        replaceUrl: true,
      });}
    }
  }
  

}
