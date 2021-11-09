import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss'],
})
export class ThumbnailComponent implements OnInit {

  @Input() src: string = "https://www.w3schools.com/howto/img_avatar.png";
  constructor() { }

  ngOnInit() {}

}
