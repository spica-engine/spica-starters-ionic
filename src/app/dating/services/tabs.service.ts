import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabsService {
  $backDropImage: Subject<string> = new Subject();
  $backDropVideo: Subject<string> = new Subject();
  $activeTab = new Subject();
  selectedTab:string;

  constructor() {}

  public listenTabClick() {
    return this.$activeTab;
  }

  public watchBackdropImage(): Subject<string> {
    return this.$backDropImage;
  }
  public set backDropImage(value) {
    this.$backDropImage.next(value);
  }
}
