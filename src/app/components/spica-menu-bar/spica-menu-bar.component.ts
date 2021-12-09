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
  @Input() routeble: boolean =true;
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
      (item) => this.project + '/' + item.key == this._router.url.substr(1)
    )[0]
      ? this._router.url.substr(this.project.length + 2)
      : this.items[0].key;
  }

  clickedItem(item) {
    this.activeLink = item.key;
    this.clickMenuItem.emit(item.key);

    if(this.routeble){
      this._router.navigateByUrl(`${this.project}/${item.key}`, {
        replaceUrl: true,
      });
    }
    this._menu.close('custom');
  }
}
