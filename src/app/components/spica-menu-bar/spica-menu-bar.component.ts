import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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
    private _menuServices: MenuService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.items = this._menuServices.getMenuItems[this.project]();
    this.activeLink = this.items.filter(
      (item) => item.key == this._router.url.substr(1)
    )[0]
      ? this._router.url.substr(1)
      : this.items[0].key;
  }

  openCustom() {
    this._menu.enable(true, 'custom');
    this._menu.open('custom');
  }
  clickedItem(item) {
    this.activeLink = item.key;
    this.clickMenuItem.emit(item.key);
    this._router.navigateByUrl(item.key, {
      replaceUrl: true,
    });
    setTimeout(() => {
      this._menu.close('custom');
    }, 150);
    console.log(this.activeLink);
  }
}
