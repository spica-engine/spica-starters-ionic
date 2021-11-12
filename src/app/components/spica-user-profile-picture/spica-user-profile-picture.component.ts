import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { environment } from 'src/app/chat/services/environment';

@Component({
  selector: 'spica-user-profile-picture',
  templateUrl: './spica-user-profile-picture.component.html',
  styleUrls: ['./spica-user-profile-picture.component.scss'],
})
export class SpicaUserProfilePictureComponent implements OnInit {
  @Input() image;
  @Output() changeImage: EventEmitter<any> = new EventEmitter();
  @Input() imageEditable: boolean = false;
  defaultImage = environment.user_img;
  constructor() {}

  ngOnInit() {}
  change(data) {
    this.changeImage.emit(data);
  }
}
