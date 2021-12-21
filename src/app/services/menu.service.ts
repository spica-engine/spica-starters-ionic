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
        { key: '/', value: 'Home', icon: 'home' },
        { key: 'survey', value: 'Survey', icon: 'clipboard-outline' },
        { key: 'create-survey', value: 'Create Survey', icon: 'create' },
        { key: 'profile', value: 'Profile', icon: 'person' },
      ] as MenuItem[];
    },
    fitness: () => {
      return [
        { key: '/', value: 'Home', icon: 'filter-outline' },
        { key: 'profile', value: 'Profile', icon: 'person' },
      ] as MenuItem[];
    },
    booking: () => {
      return [
        { key: '/', value: 'Home', icon: 'home' },
        { key: 'rooms', value: 'Rooms', icon: 'bed-outline' },
        { key: 'contact', value: 'Contact', icon: 'mail-outline' },
      ] as MenuItem[];
    },
    'real-estate': () => {
      return [
        { key: 'adversts', value: 'Adversts', icon: 'filter-outline' },
        {
          key: 'consultants',
          value: 'Our Consultants',
          icon: 'people-outline',
        },
        {
          key: 'announcement',
          value: 'Announcement',
          icon: 'megaphone-outline',
        },
        { key: 'about', value: 'About Us', icon: 'receipt-outline' },
      ] as MenuItem[];
    },
  };
}

export interface MenuItem {
  key?: string;
  value?: string;
  icon?: string;
}
