import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  public $event: BehaviorSubject<string> = new BehaviorSubject(undefined);

  publish(value: string){
    this.$event.next(value)
  }

}
