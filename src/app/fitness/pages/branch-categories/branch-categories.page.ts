import { Component, OnInit } from '@angular/core';
import { video, Video } from '../../services/bucket';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-branch-categories',
  templateUrl: './branch-categories.page.html',
  styleUrls: ['./branch-categories.page.scss'],
})
export class BranchCategoriesPage implements OnInit {

  constructor(private _route: ActivatedRoute, private _authService: AuthService) {
    this._authService.initBucket();
  }
  id: any;
  videos: Video[];
  categoryName: any;
  async ionViewWillEnter() {
    this.videos = await this.getVideos();
    this.categoryName =  this.videos[0]?.category ;
  }
  async ngOnInit() {
    this.id = this._route.snapshot.params.id;
  }
  async getVideos() {
    return video.getAll({ queryParams: { filter: { category: this.id }, relation: true } })
  }
}
