import { Component, OnInit } from "@angular/core";
import { User } from "../../services/bucket";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-waiting-requests",
  templateUrl: "./waiting-requests.page.html",
  styleUrls: ["./waiting-requests.page.scss"],
})
export class WaitingRequestsPage implements OnInit {
  constructor(private _userService: UserService) {}
  user_requests = [];
  showed_requests = [];
  loading: boolean = true;
  searchedText: string;

  ngOnInit() {
    this.loading = true;
    this.getUserRequests();
  }
  doRefresh() {
    this.loading = true;
    this.getUserRequests();
  }
  getUserRequests() {
    this._userService
      .getAllWaitingRequests()
      .then((requestsData) => {
        this.user_requests = requestsData;
        this.showed_requests = [...this.user_requests];
        this.loading = false;
      });
  }
  async acceptRequest(item) {
    this.loading = true;
    await this._userService.receiveRequest(item.sender, item._id);
    this.removeFromRequests(item._id);
    this.loading = false;
  }
  async deleteRequest(item) {
    this.loading = true;
    await this._userService.deleteRequest(item._id);
    this.removeFromRequests(item._id);
    this.loading = false;
  }
  removeFromRequests(id) {
    this.user_requests = this.user_requests.filter((item) => item._id != id);
    this.showed_requests = this.showed_requests.filter((item) => item._id != id);
  }
  getUserBySearch() {
    this.showed_requests = this.user_requests.filter((item) =>
      item.sender.username
        .toLowerCase()
        .includes(this.searchedText.toLocaleLowerCase())
    );
  }
}
