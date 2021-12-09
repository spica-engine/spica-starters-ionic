import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor() {}

  getMenuItems = {
    'job-portal': () => {
      return [
        { key: 'jobs', value: 'Jobs', icon: 'filter-outline' },
        { key: 'profile/me', value: 'Profile', icon: 'person' },
        { key: 'create-advert', value: 'Create Advert', icon: 'add' },
      ] as MenuItem[];
    },
    forum: () => {
      return [
        { key: 'home', value: 'Home', icon: 'home' },
        { key: 'create-forum', value: 'Create Forum', icon: 'create' },
        { key: 'survey', value: 'Survey', icon: 'clipboard-outline' },
        { key: 'profile', value: 'Profile', icon: 'person' },
        { key: 'authorization', value: 'Authorization', icon: 'key' },
      ] as MenuItem[];
    },
    'fitness': () => {
      return [
        { key: '/', value: 'Home', icon: 'filter-outline' },
        { key: 'profile', value: 'Profile', icon: 'person' },
        { key: 'authorization', value: 'Authorization', icon: 'key' },
      ] as MenuItem[];
    },
  };
}

export interface MenuItem {
  key?: string;
  value?: string;
  icon?: string;
}
