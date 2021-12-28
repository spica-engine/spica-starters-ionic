import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../services/environment';
import { TabsService } from '../../services/tabs.service';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  @Input() isCurrentUser: boolean;
  @Input() message: string;
  @Input() avatar: string;
  @Input() post: any;
  @Input() date: string;
  @Input() image: string;
  @Input() recurring: boolean;
  @Input() id: string;
  @Input() mode="social"

  constructor(
    private _tabService: TabsService
  ) {}

  async ngOnInit() {
    this.avatar = this.avatar || environment.user_img;
  }

  clickImage() {
    this._tabService.backDropImage = this.image;
  }
}
