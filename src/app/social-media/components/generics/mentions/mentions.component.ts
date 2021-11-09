import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { Hashtag, User, user, hashtag } from '../../../services/bucket';
import { environment } from 'src/app/social-media/services/environment';
import { DataService } from 'src/app/social-media/services/data.service';
import { UserService } from 'src/app/social-media/services/user.service';

@Component({
  selector: 'mentions',
  templateUrl: './mentions.component.html',
  styleUrls: ['./mentions.component.scss'],
})
export class MentionsComponent implements OnInit {
  friends: User[] = [];
  followings: User[] = [];
  hashtags: Hashtag[] = [];
  loadedHashtags: Hashtag[] = [];
  loading: boolean = true;
  mentioning: string = '';
  sub_mentioning: string = 'user';
  user: User;
  user_img_empty = environment.user_img;

  @Input('isMinimized') isMinimized: boolean = false;
  @Input('searchedText') searchedText: string;
  @Output('userSelected') userSelected: EventEmitter<User> =
    new EventEmitter<User>();
  @Output('tagSelected') tagSelected: EventEmitter<Hashtag> =
    new EventEmitter<Hashtag>();

  constructor(private _userService: UserService) {}

  async ngOnInit() {
    this.user = await this._userService.getActiveUser().toPromise();
    this.followings = this._userService.followingUsers;
  }

  async ngOnChanges() {
    this.loading = true;
    if (this.searchedText && this.searchedText[0] != '#' && this.friends) {
      this.mentioning = 'friend';
      if (this.searchedText.length > 1) {
        this.friends = this.followings.filter(
          (user) =>
            user.username
              .toLowerCase()
              .includes(
                this.searchedText[0] == '@'
                  ? this.searchedText.substr(1).toLowerCase()
                  : this.searchedText.toLowerCase()
              ) ||
            (user.name?.toLowerCase() + user.surname?.toLowerCase()).includes(
              this.searchedText[0] == '@'
                ? this.searchedText.split(' ').join('').substr(1).toLowerCase()
                : this.searchedText.split(' ').join('').toLowerCase()
            )
        );
        if (
          !this.friends.length ||
          (this.friends.length && this.friends.length < 6)
        ) {
          this.friends = await user.getAll({
            queryParams: {
              filter: {
                username: {
                  $regex:
                    this.searchedText[0] == '@'
                      ? this.escapeRegex(this.searchedText.substr(1))
                      : this.escapeRegex(this.searchedText),
                  $options: 'i',
                },
              },
            },
          });
        }
      }
    } else if (this.searchedText && this.searchedText[0] == '#') {
      this.mentioning = 'hashtag';
      if (
        !this.loadedHashtags.some((tag) =>
          tag.hashtag.includes(this.searchedText.substr(1))
        ) &&
        this.searchedText.length > 1
      ) {
        let tags = await hashtag.getAll({
          queryParams: {
            filter: {
              hashtag: {
                $regex: this.escapeRegex(this.searchedText.substr(1)),
                $options: 'i',
              },
            },
          },
        });
        tags = tags.filter(
          (t) => !this.loadedHashtags.some((ht) => t._id == ht._id)
        );
        this.loadedHashtags = this.loadedHashtags.concat(tags);
      }
      this.hashtags = this.loadedHashtags.filter((hastags: Hashtag) =>
        hastags.hashtag
          .toLowerCase()
          .includes(this.searchedText.substr(1).toLowerCase())
      );
    }
    this.loading = false;
  }

  mentionUser(user: User) {
    this.userSelected.emit(user);
  }

  addHashtag(tag: Hashtag) {
    this.tagSelected.emit(tag);
  }
  escapeRegex(string) {
    return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }
}
