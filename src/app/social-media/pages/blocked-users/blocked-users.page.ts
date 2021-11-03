import { Component, OnInit } from "@angular/core";
import { Blocked_User, User } from "../../services/bucket";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-blocked-users",
  templateUrl: "./blocked-users.page.html",
  styleUrls: ["./blocked-users.page.scss"],
})
export class BlockedUsersPage {
  me: User;
  loading: boolean = false;
  blocks: Blocked_User[]=[];

  constructor(private _userService: UserService) {}

  async ionViewWillEnter() {
    this.me = await this._userService.getActiveUser().toPromise();
    this.blocks = await this._userService.getBlockedUsers()
  }
  removeBlock(entry) {
    this.loading = true;
    this._userService
      .unBlockUser(entry)
      .then(() => {
        this.blocks = this.blocks.filter((item) => item._id != entry._id);
        this.loading = false;
      });
  }
}
