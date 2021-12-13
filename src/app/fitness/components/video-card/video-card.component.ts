import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { video,Video,initialize } from '../../services/bucket';
import { environment } from '../../services/environment';


@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
})
export class VideoCardComponent{

  @Input() video;
  constructor() {
  
  }
  ngOnInit() {
  }
  
}
