import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IonInfiniteScroll, ModalController } from "@ionic/angular";
import { Post, User,liked_post } from "../../services/bucket";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-users-modal",
  templateUrl: "./users-modal.component.html",
  styleUrls: ["./users-modal.component.scss"],
})
export class UsersModalComponent implements OnInit {
  @ViewChild(IonInfiniteScroll, { static: false })
  infiniteScroll: IonInfiniteScroll;
  likedUsers:User[]=[];
  post: Post;
  follow_some_users: boolean = false;
  scroll_params = {
    skip: 0,
    limit: 10,
  };
  constructor(
    private _dataService: DataService,
    private modalController: ModalController,
  ) {}

  async ngOnInit() {
    this.getlikedPosts();
  }
  getlikedPosts() {
    liked_post
      .getAll({
        queryParams: {
          filter: { post: this.post._id },
          relation: "user",
          limit: this.scroll_params.limit,
          skip: this.scroll_params.skip,
          sort: { _id: -1 },
        },
      })
      .then((data) => {
        this.likedUsers = this.likedUsers.concat(data.map((item)=>item.user as User));

        this.infiniteScroll.complete();
        if (data.length < this.scroll_params.limit)
          this.infiniteScroll.disabled = true;
      });
  }
  close() {
    this.modalController.dismiss({ is_followed: this.follow_some_users });
  }
  loadData() {
    this.scroll_params.skip =
      this.scroll_params.limit + this.scroll_params.skip;
    this.getlikedPosts();
  }
  followUser() {
    this.follow_some_users = true;
  }
  routeUser(user: User) {
    this.modalController.dismiss({ is_followed: this.follow_some_users, route: `profile/${user._id}`});
  }
}
