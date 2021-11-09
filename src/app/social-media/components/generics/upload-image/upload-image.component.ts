import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/app/social-media/services/environment';

@Component({
  selector: 'upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss'],
})
export class UploadImageComponent {
  @Output()
  change: EventEmitter<string> = new EventEmitter<string>();
  cameraSubs: Subscription;
  @Input() icon: string = 'camera-outline';

  showImageSelect() {
    this.change.emit(environment.example_base64);
  }
}
