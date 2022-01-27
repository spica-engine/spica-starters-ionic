import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { CameraService } from 'src/app/services/camera.service';
import { environment } from 'src/app/social-media/services/environment';

@Component({
  selector: 'spica-upload-image',
  templateUrl: './spica-upload-image.component.html',
  styleUrls: ['./spica-upload-image.component.scss'],
})
export class SpicaUploadImageComponent {
  @Output() change: EventEmitter<string> = new EventEmitter<string>();
  @Input() icon: string = 'camera-outline';
  @Input() image: string = null;
  @Input() allMediaavailable:boolean=false;

  cameraSubs: Subscription;
  errSubs: Subscription;

  constructor(private _cameraProvider: CameraService) {}

  showImageSelect() {
    // this.change.emit(environment.example_base64);

    this._cameraProvider.selectImage(this.allMediaavailable);
    this.errSubs = this._cameraProvider.throwError.subscribe((_) => {
      this.cameraSubs.unsubscribe();
      this.errSubs.unsubscribe();
    });
    this.cameraSubs = this._cameraProvider.croppedImagePath
      .pipe(take(1))
      .subscribe(
        (imageData: string) => {
          this.image = imageData;
          this.change.emit(imageData);
        },
        (err) => console.log("err", err)
      );
  }
}
