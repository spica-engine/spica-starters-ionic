import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as DataService from '../../services/bucket'
import { environment } from '../../services/environment';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.page.html',
  styleUrls: ['./room-details.page.scss'],
})
export class RoomDetailsPage implements OnInit {

  id: any;
  hotel_room: DataService.Room;

  constructor(private activatedRoute: ActivatedRoute) {
    DataService.initialize({ apikey: environment.public_apikey })
  }

  async ngOnInit() {
    this.id = this.activatedRoute.snapshot.params.id;
    await this.getHotel_room()
  }

  async getHotel_room() {
    this.hotel_room = await DataService.room.get(this.id,{queryParams:{relation: true}})
    console.log(this.hotel_room);
  }
}
