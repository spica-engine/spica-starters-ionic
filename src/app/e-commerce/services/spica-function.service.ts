import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './environment';

@Injectable({
  providedIn: 'root',
})
export class SpicaFuntionService {
  constructor(private http: HttpClient) {}

  setHeader() {
    let header = new HttpHeaders({
      authorization:
        'IDENTITY ' + localStorage.getItem('ecommerce_spica_token'),
    });
    return header;
  }

  validateCoupone(couponCode: string, userId: string) {
    return this.http
      .post(
        `${environment.apiUrl}/fn-execute/validateCoupone`,
        { couponCode, userId },
        {
          headers: this.setHeader(),
        }
      )
      .toPromise();
  }

  payByStripe(data: any) {
    return this.http
      .post(
        `${environment.apiUrl}/fn-execute/payByStripe`,
        { data },
        {
          headers: this.setHeader(),
        }
      )
      .toPromise();
  }

  createCardToken(card: any) {
    return this.http
      .post(
        `${environment.apiUrl}/fn-execute/createCardToken`,
        { card },
        {
          headers: this.setHeader(),
        }
      )
      .toPromise();
  }
}
