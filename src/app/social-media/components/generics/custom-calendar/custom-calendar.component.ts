import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { CalendarMode, Step } from "ionic2-calendar/calendar";
import { CalendarComponent } from "ionic2-calendar";

@Component({
  selector: "custom-calendar",
  templateUrl: "./custom-calendar.component.html",
  styleUrls: ["./custom-calendar.component.scss"],
})
export class CustomCalendarComponent implements OnInit {
  @Input() eventSource;
  @Output() timeselected: EventEmitter<any> = new EventEmitter();
  @ViewChild(CalendarComponent) myCalendar: CalendarComponent;
  calendar;
  viewTitle;
  markDisabled = (date: Date) => {
    var current = new Date();
    current.setDate(current.getDate() - 1);
    return date < current;
  };

  constructor(public translate: TranslateService, private el: ElementRef) {}

  ngOnInit() {
    this.calendar = {
      mode: "month" as CalendarMode,
      step: 30 as Step,
      currentDate: new Date(),
      dateFormatter: {
        formatMonthViewDayHeader: (date: Date) => {
          let key = "days." + date.toString().split(" ")[0].toLowerCase();
          return this.translate.instant(key);
        },
      },
    };
  }
  onViewTitleChanged(title) {
    this.viewTitle =
      this.translate.instant("months." + title.split(" ")[0].toLowerCase()) +
      " " +
      title.split(" ")[1];
  }

  onTimeSelected($event) {
    this.timeselected.emit($event);
  }
  slideNext() {
    this.myCalendar.slideNext();
  }
  slidePre() {
    this.myCalendar.slidePrev();
  }
  changeMode(mode) {
    this.calendar.mode = mode;
  }
}
