import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/app/social-media/services/environment';

@Component({
  selector: 'spica-upload-image',
  templateUrl: './spica-upload-image.component.html',
  styleUrls: ['./spica-upload-image.component.scss'],
})
export class SpicaUploadImageComponent {
  @Output()
  change: EventEmitter<string> = new EventEmitter<string>();
  cameraSubs: Subscription;
  @Input() icon: string = 'camera-outline';

  showImageSelect() {
    this.change.emit(environment.example_base64);
  }
}
