import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  getLocalStorageParsedData(key) {
    let data = localStorage.getItem(key);
    let parsedData = [];

    if (data) {
      parsedData = JSON.parse(data);
    }

    return parsedData;
  }

  setLocalStorageStringifyData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  }
}
