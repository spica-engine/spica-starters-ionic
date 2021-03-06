import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/app/social-media/services/environment';
import { Activity } from '../../../services/bucket';

@Component({
  selector: 'activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.scss'],
})
export class ActivityCardComponent implements OnInit {
  @Input() activity: Activity;

  default_user_image = environment.user_img;
  actionText: string = '';

  constructor(
    private _router: Router,
    private _translateService: TranslateService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    switch (this.activity.action) {
      case 'like':
        this.actionText = this._translateService.instant(
          'activity_card.has-liked-post'
        );
        break;
      case 'comment':
        this.actionText = this._translateService.instant(
          'activity_card.has-commented-post'
        );
        break;
      case 'follow_user':
        this.actionText = this._translateService.instant(
          'activity_card.has-following-user'
        );
        break;
      case 'tag_in_comment':
        this.actionText = this._translateService.instant(
          'activity_card.tagged-in-comment'
        );
        break;
      case 'tag_in_post':
        this.actionText = this._translateService.instant(
          'activity_card.tagged-in-post'
        );
        break;
      case 'request_user':
        this.actionText = this._translateService.instant(
          'activity_card.request_user'
        );
        break;
      default:
        break;
    }
  }

  navigateToPost(posId) {
    this._router.navigate([`post-detail/${posId}`], {
      relativeTo: this._route,
    });
  }
}
