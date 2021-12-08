import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './environment';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  setHeader() {
    let header = new HttpHeaders({
      authorization: 'IDENTITY ' + localStorage.getItem('chat_spica_token'),
    });
    return header;
  }
  register(user_data) {
    return this.http.post(`${environment.api_url}/fn-execute/register`, {
      user_data,
    });
  }
  getCriterias() {
    return {
      education_status: [
        'primary_education',
        'high_school',
        'associate_degree',
        'bachelor_degree',
        'master_degree',
      ],
      experience: [
        'at_last_1_year',
        'at_last_2_year',
        'at_last_3_year',
        'at_last_5_year',
      ],
      sector: ['it', 'tourism'],
      department: ['computing', 'marketing'],
      position: ['senior_manager', 'intern'],
    };
  }
}
