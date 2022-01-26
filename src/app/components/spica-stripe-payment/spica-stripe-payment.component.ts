import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-spica-stripe-payment',
  templateUrl: './spica-stripe-payment.component.html',
  styleUrls: ['./spica-stripe-payment.component.scss'],
})
export class SpicaStripePaymentComponent implements OnInit {
  @Input() totalPrice: number = 0;
  @Input() currency: string = 'USD';
  cardForm: FormGroup;
  backSide: boolean = false;
  cardTypeUrl: string =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/300px-MasterCard_Logo.svg.png';

  constructor(
    private _formBuilder: FormBuilder,
    private _modalController: ModalController
  ) {}

  ngOnInit() {
    this.cardForm = this._formBuilder.group({
      cardNumber: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      expireDate: ['', Validators.required],
      cvc: ['', Validators.required],
    });
  }

  formatCardNumber(value) {
    this.cardForm.controls.cardNumber.setValue(
      value.replace(/\s/g, '').replace(/\d{4}(?=.)/g, '$& ')
    );

    if (this.cardForm.controls.cardNumber.value[0] == 4) {
      // visa
      this.cardTypeUrl =
        'https://www.pngitem.com/pimgs/m/35-351816_card-visa-small-logo-png-transparent-png.png';
    } else {
      // mastercard
      this.cardTypeUrl =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/300px-MasterCard_Logo.svg.png';
    }
  }

  formatExpireDate(value) {
    if (value.length > 2) {
      this.cardForm.controls.expireDate.setValue(
        value.substring(0, 2) + '/' + value.substring(2 + 1)
      );
    }
  }

  dismiss(value) {
    let expireDateArr = this.cardForm.controls.expireDate.value.split('/');
    let cardData = {
      number: this.cardForm.controls.cardNumber.value.replace(/\s/g, ''),
      exp_month: Number(expireDateArr[0]),
      exp_year: Number(expireDateArr[1]),
      cvc: Number(this.cardForm.controls.cvc.value),
    };
    this._modalController.dismiss({
      value: value,
      cardData,
    });
  }
}
