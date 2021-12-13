import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { User, Post, post } from '../../services/bucket';
import { ImageService } from '../../services/image.service';
import { TranslateService } from '@ngx-translate/core';
import { HashtagService } from '../../services/hashtag.service';
import { environment } from '../../services/environment';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.page.html',
  styleUrls: ['./post-create.page.scss'],
})
export class PostCreatePage implements OnInit {
  post: Post;
  user: User;
  searchedText: string;
  lastCaretPosition: number;
  loading: boolean = false;
  uploadingImage: boolean = false;
  tempPost: Post;
  constructor(
    private _modalController: ModalController,
    private _imageService: ImageService,
    private _hashtagService: HashtagService,
    private _toastController: ToastController,
    private _translateService: TranslateService
  ) {}

  async ngOnInit() {
    if (this.post && this.post._id) {
      this.tempPost = JSON.parse(JSON.stringify(this.post));
    } else {
      this.post = {
        text: undefined,
        file: {
          url: undefined,
          mimetype: undefined,
        },
        user: this.user as any,
        tags: [],
        hashtags: [],
      };
    }
  }

  async close(refresh: boolean = false) {
    if (this.post._id && !refresh)
      this.post = JSON.parse(JSON.stringify(this.tempPost));
    await this._modalController.dismiss({
      refresh: refresh,
      editpost: this.post,
    });
    this.loading = false;
  }

  userUploadedImage(data) {
    this.uploadingImage = true;
    let mimetype = data.split(';')[0].split(':')[1];
    this.saveImage(data, mimetype);
  }
  saveImage(data, mimetype) {
    let file_buf = this._imageService.toBuffer(data);
    let bufWithMeta = {
      contentType: mimetype,
      data: file_buf,
      name: 'image',
    };
    let imageId;
    if (
      this.post.file.url &&
      this.post.file.url.includes(environment.project_id)
    ) {
      let splitArr = this.post.file.url.split('/');
      imageId = splitArr[splitArr.length - 1].split('?')[0];
    }
    this._imageService.insert(bufWithMeta, imageId).then((res) => {
      this.post.file.url = res.url + `&timestamp=${new Date().getTime()}`;
      this.post.file.mimetype = res.content.type;
      this.uploadingImage = false;
    });
  }

  async newPost() {
    this.loading = true;
    await this.checkTagCreate();
    post.insert(this.post).then(
      (newPost) => {
        this.post = newPost;
        this.close(true);
      },
      (err) => console.log(err)
    );
  }
  mentioning($event) {
    this.searchedText = $event.text;
    this.lastCaretPosition = $event.caret + 1;
  }

  async mentionUser(user: any) {
    this.searchedText = null;
    //-----------------------------avoiding for duplicate user
    let existUser;
    if (this.post.tags.length) {
      if (this.post.tags.filter((item) => item['_id'] == user._id)[0])
        existUser = user;
    }

    if (existUser) {
      let toast = await this._toastController.create({
        color: 'warning',
        header: this._translateService.instant('dublicate_tag'),
        duration: 3000,
      });
      toast.present();
      return;
    }
    //-----------------------------------------------------------
    this.post.tags.push(user);

    let lastMention = this.post.text.substr(0, this.lastCaretPosition);
    let lastMentionStartsAt = lastMention.lastIndexOf('@');
    this.post.text =
      this.post.text.substr(0, lastMentionStartsAt) +
      '@' +
      (user.owner ? user.name : user.username) +
      this.post.text.substr(this.lastCaretPosition);
    this.postTextChange();
  }

  hashtagSelected(hashtag) {
    this.searchedText = null;
    this.post.hashtags.push(hashtag);
    let lastMention = this.post.text.substr(0, this.lastCaretPosition);
    let lastMentionStartsAt = lastMention.lastIndexOf('#');
    this.post.text =
      this.post.text.substr(0, lastMentionStartsAt) +
      '#' +
      hashtag.hashtag +
      this.post.text.substr(this.lastCaretPosition);
  }
  async savePost() {
    this.loading = true;
    await this.checkTagCreate();
    this.close(true);
  }

  async checkTagCreate() {
    this.post.hashtags = await this._hashtagService.checkTagCreate(
      this.post.text,
      this.post.hashtags
    );
  }
  postTextChange() {
    //--tag
    this.post.tags.forEach((element: any) => {
      let tag = !this.post.text.includes('@' + element.username)
        ? element
        : undefined;
      if (tag)
        this.post.tags = this.post.tags.filter(
          (item: any) => item._id != tag._id
        );
    });
    //--hashtag
    let hashtag = this.post.hashtags.filter(
      (item: any) => !this.post.text.includes('#' + item.hashtag)
    )[0];
    if (hashtag)
      this.post.hashtags = this.post.hashtags.filter(
        (item: any) => item._id != hashtag['_id']
      );
  }
}
