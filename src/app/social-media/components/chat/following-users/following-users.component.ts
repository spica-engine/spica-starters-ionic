import { Component, OnInit } from "@angular/core";
import { UserService } from "./../../../services/user.service";
import { DataService } from "./../../../services/data.service";
import { User, Follow,follow} from "../../../services/bucket";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-following-users",
  templateUrl: "./following-users.component.html",
  styleUrls: ["./following-users.component.scss"],
})
export class FollowingUsersComponent implements OnInit {
  user: User;
  allUsers: Follow[];
  choosenUsers = [];
  loading: boolean = true;
  addComment: boolean = false; // come to dm post
  dm_comment: string; // used for dm post
  extract_users: User[] = [];
  searchedText: string = "";
  showedUsers = [];

  constructor(
    private userService: UserService,
    private dataService: DataService,
    private modalController: ModalController
  ) {}

  async ngOnInit() {
    this.user = await this.userService.getActiveUser().toPromise();
    this.allUsers = await follow
      .getAll({
        queryParams: {
          filter: { follower: this.user._id },
          relation: "following",
        },
      });
      this.loading = false
     
    if (this.extract_users.length) {
      this.allUsers = this.allUsers.filter(
        (item) => !this.extract_users.some((eu) => eu._id == item.following['_id'])
      );
    }
    this.showedUsers = [...this.allUsers];
  }

  toggleUser(user) {
    if (
      this.choosenUsers.filter((choosenUser) => choosenUser._id == user._id)
        .length
    ) {
      this.choosenUsers.splice(
        this.choosenUsers.map((user) => user._id).indexOf(user._id),
        1
      );
    } else {
      this.choosenUsers.push(user);
    }
  }

  selectUser(user) {
    this.choosenUsers = [];
    this.choosenUsers.push(user);
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      users: this.choosenUsers,
      dm_comment: this.dm_comment == "" ? null : this.dm_comment,
    });
  }

  cancle() {
    this.modalController.dismiss({
      users: [],
      dm_comment: null,
    });
  }
  getUserBySearch() {
    this.showedUsers = this.allUsers.filter((item) =>
      item.following['username']
        .toLowerCase()
        .includes(this.searchedText.toLocaleLowerCase())
    );
  }
}
