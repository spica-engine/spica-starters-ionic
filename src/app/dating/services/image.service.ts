import { Injectable } from '@angular/core';
import * as Storage from '@spica-devkit/storage';
import { environment } from './environment';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor() {}

  private init() {
    let initializeConfig;
    if (localStorage.getItem('socialmedia_spica_token')) {
      initializeConfig = {
        publicUrl: environment.apiUrl,
        identity: localStorage.getItem('socialmedia_spica_token'),
      };
    } else {
      initializeConfig = {
        publicUrl: environment.apiUrl,
        apikey: environment.apikey,
      };
    }
    Storage.initialize(initializeConfig);
  }

  insert(storageObject, imageId): Promise<Storage.StorageObject> {
    this.init();
    if (imageId) {
      return Storage.update(imageId, storageObject);
    } else {
      return Storage.insert(storageObject).then((v) => (v = v[0]));
    }
  }

  toBuffer(base64, type = '') {
    base64 = base64.split(',')[1];
    const binaryString = window.atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  }
}