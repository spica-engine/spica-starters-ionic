import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'spica-category',
  templateUrl: './spica-category.component.html',
  styleUrls: ['./spica-category.component.scss'],
})
export class SpicaCategoryComponent implements OnInit {
  @Input() categories: any;
  @Output() clickNavigate = new EventEmitter<string>();

  showedCat: string = '';
  constructor() {}

  ngOnInit() {}

  clicked(category) {
    if (!category.sub_categories?.length) {
      this.clickNavigate.emit(category._id);
    } else {
      if (this.showedCat == category._id) {
        this.showedCat = '';
      } else this.showedCat = category._id;
    }
  }
}
