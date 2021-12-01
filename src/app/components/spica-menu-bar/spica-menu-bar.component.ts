import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { MenuItem, MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'spica-menu-bar',
  templateUrl: './spica-menu-bar.component.html',
  styleUrls: ['./spica-menu-bar.component.scss'],
})
export class SpicaMenuBarComponent implements OnInit {
  @Input() side: string = 'start'; //can be end
  @Input() project: string;
  @Output() clickMenuItem: EventEmitter<any> = new EventEmitter();
  items: MenuItem[];
  activeLink: string;
  constructor(
    private _menu: MenuController,
    private _menuServices: MenuService
  ) {}

  ngOnInit() {
    this.items = this._menuServices.getMenuItems[this.project]();
    this.activeLink = this.items[0].key;
  }

  openCustom() {
    this._menu.enable(true, 'custom');
    this._menu.open('custom');
  }
  clickedItem(item) {
    this.clickMenuItem.emit(item.key);
    setTimeout(() => {
      this._menu.close('custom');
    }, 200);
  }
}
