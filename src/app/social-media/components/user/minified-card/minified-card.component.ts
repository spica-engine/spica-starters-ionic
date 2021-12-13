import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { take } from "rxjs/operators";
import { User } from "../../../services/bucket";
import { UserService } from "src/app/social-media/services/user.service";
import { environment } from "src/app/social-media/services/environment";

@Component({
  selector: "user-minified-card",
  templateUrl: "./minified-card.component.html",
  styleUrls: ["./minified-card.component.scss"],
})
export class MinifiedCardComponent implements OnInit {
  @Input() type: string = "vertical"; // "vertical", "horizontal";
  @Input() user: any;
  @Input() with_router: boolean = true;
  @Input() followable: boolean = false;

  @Output() onFollow: EventEmitter<User> = new EventEmitter();
  @Output() onRoute: EventEmitter<User> = new EventEmitter();

  isFollowing: boolean = false;
  me: User;
  default_user_image = environment.user_img;
  wait_request_id: string;
  followLoading: boolean = false;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}

  async ngOnInit() {
    if (this.user)
      //Otherwise skeleton
      this._userService
        .getActiveUser()
        .pipe(take(1))
        .subscribe((data) => {
          this.me = data;
          if (this.followable) {
            this.isFollowing = this._userService.isFollowingUser(this.user);
            if (this.user.visibility == "private" && !this.isFollowing) {
              this._userService
                .getWaitingRequest(this.user)
                .then((requestData) => {
                  this.wait_request_id = requestData[0]?._id;
                  if (this.wait_request_id) this.isFollowing = true;
                });
            }
            if (
              this._userService.blockedUsers.filter(
                (item) => item.blocked['_id'] == this.user._id
              )[0]
            )
              this.followable = false;
          }
        });
  }

  followUser() {
    if (!this.followLoading) {
      this.followLoading = true;
      if (this.user.visibility == "private") {
        this._userService
          .sendRequest(this.user)
          .then(() => {
            this.onFollow.emit(this.user);
            this.isFollowing = true;
            this.followLoading = false;
          });
      } else {
        this._userService
          .followUser(this.user)
          .then(() => {
            this.isFollowing = true;
            this.onFollow.emit(this.user);
            this.followLoading = false;
          });
      }
    }
  }
  routeUser() {
    this.onRoute.emit(this.user);
    if (this.with_router) {
      this._router.navigate(["profile", this.user._id], {
        relativeTo: this._activatedRoute,
      });
    }
  }
}
