import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {

  constructor(private _commonService: CommonService) { }
  @Input() user: any;
  @Input() details:boolean = true;
  @Input() matched:boolean = false;
  @Output() clickedInfo = new EventEmitter<boolean>();
  age: number;

  ngOnInit() {
    this.age = this._commonService.calculateAge(this.user.birthday)
  }

  userDetails(){
    this.clickedInfo.emit();
  }

}
