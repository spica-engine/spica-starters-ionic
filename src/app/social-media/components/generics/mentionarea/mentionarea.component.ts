import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectorRef,
} from '@angular/core';
import { UserService } from 'src/app/social-media/services/user.service';
import { User, Hashtag } from '../../../services/bucket';

@Component({
  selector: 'app-mentionarea',
  templateUrl: './mentionarea.component.html',
  styleUrls: ['./mentionarea.component.scss'],
})
export class MentionareaComponent implements OnInit {
  @Input() tags;
  @Input() tag_groups;
  @Input() hashtags;
  @Input() text;
  @Input() maxCharacter = 160;
  me: User;

  textArray: any = [];
  lastTextArray: any = [];

  @Output() changeRoute: EventEmitter<string> = new EventEmitter<string>();

  clicked_more: boolean = false;

  constructor(
    private ref: ChangeDetectorRef,
    private _userService: UserService
  ) {}

  async ngOnInit() {
    this.me = await this._userService.getActiveUser().toPromise();
    if (this.text) {
      this.textArray = this.text?.slice(0, this.maxCharacter);
      this.textArray = this.textArray.replace(/\n/g, ' [**br**] ').split(' ');
    }
    this.setLastTextArray();
  }

  isHashtag(text) {
    if (this.hashtags)
      return this.hashtags.filter((h: Hashtag) => text == '#' + h.hashtag);
    return [];
  }

  isTag(text) {
    if (this.tags)
      return this.tags.filter((u: User) => text == '@' + u.username);
    return [];
  }
  isTaggedUserGroup(text) {
    if (this.tag_groups) {
      return this.tag_groups.filter((u) => text == '@' + u.name);
    }
    return [];
  }

  isLink(text) {
    const regex =
      /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/gim;
    return text.match(regex) ? true : false;
  }

  openExternalLink(word) {
    window.open(word, '_blank');
  }

  setRoute(route, param) {
    this.changeRoute.emit(`${route}/${param}`);
  }
  setMore() {
    this.textArray = this.text.slice(0).replace(/\n/g, ' [**br**] ').split(' ');
    this.clicked_more = true;
    this.setLastTextArray();
  }
  setLastTextArray() {
    this.lastTextArray = [];
    this.textArray.forEach((element) => {
      if (this.isTag(element).length) {
        this.lastTextArray.push({
          word: element,
          state: 'tag',
          param: this.isTag(element)[0]._id,
        });
      } else if (this.isHashtag(element).length) {
        this.lastTextArray.push({
          word: element,
          state: 'hashtag',
          param: this.isHashtag(element)[0]._id,
        });
      } else if (this.isLink(element)) {
        this.lastTextArray.push({
          word: element,
          state: 'link',
        });
      } else if (this.isTaggedUserGroup(element).length) {
        this.lastTextArray.push({
          word: element,
          state: 'tagged_group',
          param: this.isTaggedUserGroup(element)[0]._id,
        });
      } else {
        this.lastTextArray.push({
          word: element,
          state: 'none',
        });
      }
    });
  }
}
