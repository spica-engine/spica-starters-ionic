import { Injectable } from "@angular/core";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { Crop } from "@ionic-native/crop/ngx";

// import {
//   VideoCapturePlus,
//   VideoCapturePlusOptions,
// } from "@ionic-native/video-capture-plus/ngx";

import { ActionSheetController, Platform } from "@ionic/angular";
import { Subject } from "rxjs";
import { Filesystem } from "@capacitor/filesystem";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class CameraService {
  public croppedImagePath: Subject<string> = new Subject();
  public throwError: Subject<boolean> = new Subject();
  imageMimeTypes = ["jpeg", "jpg", "png"];
  constructor(
    private camera: Camera,
    private actionSheetController: ActionSheetController,
    // private videoCapturePlus: VideoCapturePlus,
    private crop: Crop,
    private platform: Platform
  ) {}

  pickImage(sourceType, allMediaavailable) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: allMediaavailable
        ? this.camera.MediaType.ALLMEDIA
        : this.camera.MediaType.PICTURE,
      correctOrientation: true,
    };
    this.camera.getPicture(options).then(
      (filePath) => {
        filePath = filePath.split("?")[0];
        console.log(filePath);
        if (
          filePath.toLowerCase().indexOf("mp4") >= 0 ||
          filePath.toLowerCase().indexOf("mov") >= 0
        ) {
          filePath = "file://" + filePath;
          this.uploadVideo(filePath);
        } else if (
          this.imageMimeTypes.includes(
            filePath.substr(filePath.lastIndexOf(".") + 1, filePath.length)
          )
        )
          this.cropImage(filePath.split("?")[0]);
        else console.log("filedata :", filePath); //do nothing
      },
      async (err) => {
        this.throwError.next(true);
        console.log(err);
      }
    );
  }

  async uploadVideo(videoUrl) {
    let base64file = await this.filePathToBase64(videoUrl);
    this.croppedImagePath.next("data:video/mp4;base64," + base64file);
  }

  async selectImage(allMediaavailable: boolean) {
    let buttons = [
      {
        text: "Choose from gallery",
        handler: () => {
          this.pickImage(
            this.camera.PictureSourceType.PHOTOLIBRARY,
            allMediaavailable
          );
        },
      },
      {
        text: "Take a Photo",
        handler: () => {
          this.pickImage(this.camera.PictureSourceType.CAMERA, false);
        },
      },
      {
        text: "Cancel",
        role: "cancel",
      },
    ];
    // if (allMediaavailable)
    //   buttons.splice(buttons.length - 1, 0, {
    //     text: this.translateService.instant("take-video"),
    //     handler: () => {
    //       this.pickVideo();
    //     },
    //   });
    const actionSheet = await this.actionSheetController.create({
      // header: 'Upload Image',
      buttons,
    });
    await actionSheet.present();
  }

  cropImage(imagepath) {
    this.crop.crop(imagepath, { quality: 75 }).then(
      async (newImage) => {
        let base64file = await this.filePathToBase64(newImage);
        this.croppedImagePath.next("data:image/jpeg;base64," + base64file);
      },
      (error) => console.error("Error cropping image", error)
    );
  }
  // pickVideo() {
  //   const options: VideoCapturePlusOptions = {
  //     limit: 1,
  //     highquality: true,
  //   };
  //   this.videoCapturePlus.captureVideo(options).then(
  //     async (mediafile) => {
  //       if (this.platform.is("ios")) {
  //         mediafile[0].fullPath = "file:///" + mediafile[0].fullPath;
  //       }
  //       this.uploadVideo(mediafile[0].fullPath);
  //     },
  //     (error) => console.log("Something went wrong", error)
  //   );
  // }
  async filePathToBase64(path) {
    const file = await Filesystem.readFile({
      path: path.split("?")[0],
    });
    return file.data;
  }
}
