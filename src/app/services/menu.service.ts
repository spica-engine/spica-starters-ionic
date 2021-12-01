import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor() {}

  getMenuItems = {
    job_portal: () => {
      return [
        { key: 'home', value: 'Home', icon: 'home' },
        { key: 'profile', value: 'Profile', icon: 'person' },
      ] as MenuItem[];
    },
  };
}

export interface MenuItem {
  key?: string;
  value?: string;
  icon?: string;
}
