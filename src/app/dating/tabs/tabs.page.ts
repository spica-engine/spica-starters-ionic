import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(
    private _authService: AuthService,
    private _chatService: ChatService
  ) { }

  ngOnInit() {
   
  }

  async ionViewWillEnter(){
    let me  = await this._authService.getUser().toPromise();
    if(me){
      this._chatService.initialize();
    }
  }

}
