import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'music-mini-player',
  templateUrl: './mini-player.component.html',
  styleUrls: ['./mini-player.component.scss'],
})
export class MiniPlayerComponent implements OnInit {
  @Input() paused = false;
  @Input() isLiked = false;
  @Input() data;

  @Output() clicked: EventEmitter<{}> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  contentClicked() {
    this.clicked.emit({ action: 'player' });
  }

  likeClicked() {
    this.isLiked = !this.isLiked;
    this.clicked.emit({ action: 'like', value: this.isLiked });
  }

  playClicked() {
    this.clicked.emit({ action: 'play'});
  }
}
