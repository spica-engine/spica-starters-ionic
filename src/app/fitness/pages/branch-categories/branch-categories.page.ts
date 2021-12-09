import { Component, OnInit } from '@angular/core';
import { environment } from '../../services/environment';
import { video, Video, initialize } from '../../services/bucket';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-branch-categories',
  templateUrl: './branch-categories.page.html',
  styleUrls: ['./branch-categories.page.scss'],
})
export class BranchCategoriesPage implements OnInit {

  constructor(private _route: ActivatedRoute) {
    initialize({ identity:  localStorage.getItem('fitness_spica_token') });
  }
  id: any;
  video: Video[];
  categoryName: any;
  async ionViewWillEnter() {
    this.video = await this.getVideos();
    this.categoryName = [] || this.video[0].category;
  }
  async ngOnInit() {
    this.id = this._route.snapshot.params.id;
  }
  async getVideos() {
    return video.getAll({ queryParams: { filter: { category: this.id }, relation: true } })
  }
}
