import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'spica-product-card',
  templateUrl: './spica-product-card.component.html',
  styleUrls: ['./spica-product-card.component.scss'],
})
export class SpicaProductCardComponent implements OnInit {
  @Input() data: any;
  @Output() likeChanged: EventEmitter<boolean> = new EventEmitter();

  isLiked: boolean = false;
  constructor() {}

  ngOnInit() {
    this.isLiked = this.data['is_liked']
  }

  changeLike() {
    this.isLiked = !this.isLiked;
    this.likeChanged.emit(this.isLiked);
  }
}
