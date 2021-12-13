import { Component, Input, OnInit } from "@angular/core";
import { environment } from "src/app/social-media/services/environment";
import { TabsService } from "src/app/social-media/tabs/tabs.service";
import { Post } from "../../../services/bucket";

@Component({
  selector: "message-single",
  templateUrl: "./message-single.component.html",
  styleUrls: ["./message-single.component.scss"],
})
export class MessageSingleComponent implements OnInit {
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
