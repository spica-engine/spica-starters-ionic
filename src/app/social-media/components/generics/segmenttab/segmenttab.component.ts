import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-segmenttab",
  templateUrl: "./segmenttab.component.html",
  styleUrls: ["./segmenttab.component.scss"],
})
export class SegmenttabComponent implements OnInit {
  @Input() type: number = 0;
  @Input() segments=[];
  @Output() typeChange: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}
  changeType(type) {
    this.typeChange.emit(type);
  }
}
