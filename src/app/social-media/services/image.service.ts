import { Injectable } from "@angular/core";
// import * as Storage from "@spica-devkit/storage";
import { environment } from "./environment";

@Injectable({
  providedIn: "root",
})
export class ImageService {
  constructor() {}

  // isValidImage(file) {
  //   return file['type'].split('/')[0] === 'image';
  // }

  // async base64ToFile(base64_file) {
  //   let file: File;
  //   await fetch(base64_file)
  //     .then((res) => res.blob())
  //     .then((blob) => {
  //       file = new File([blob], 'user-profile-photo.png', {
  //         type: 'image/png',
  //       });
  //     });
  //   return file;
  // }

  // fileTobase64 = (file) =>
  //   new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => resolve(reader.result);
  //     reader.onerror = (error) => reject(error);
  //   });

  compressImage(base64, width) {
    let mimeType = base64.split(";")[0].split(":")[1];
    console.log(mimeType)

    let ratio: number = 0;
    return new Promise((res, rej) => {
      const img = new Image();
      img.src = base64;
      img.onload = () => {
        const elem = document.createElement("canvas");
        ratio = img.width / img.height;
        let height = width / ratio;
        elem.height = height;
        elem.width = width;
        const ctx = elem.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        const data = ctx.canvas.toDataURL(mimeType);
        res(data);
      };
      img.onerror = (error) => rej(error);
    });
  }

  private init() {
    let initializeConfig;
    if (localStorage.getItem("spica_token")) {
      initializeConfig = {
        publicUrl: environment.api_url,
        identity: localStorage.getItem("spica_token"),
      };
    } else {
      initializeConfig = {
        publicUrl: environment.api_url,
        apikey: environment.storage_read_apikey,
      };
    }
    // Storage.initialize(initializeConfig);
  }

  // insert(storageObject) {
  //   this.init();
  //   return Storage.insert(storageObject);
  // }
  // insert(storageObject, imageId):Promise<Storage.StorageObject>{
  //   this.init();
  //   if (imageId) {
  //     return Storage.update(imageId, storageObject);
  //   } else {
  //     return Storage.insert(storageObject).then((v) => (v = v[0]))
  //   }
  // }

  toBuffer(base64, type = "") {
    base64 = base64.split(",")[1];
    const binaryString = window.atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
  }
}
