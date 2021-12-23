import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  teacher,
  Teacher,
  initialize,
  Video,
  video,
} from '../../services/bucket';
import { environment } from '../../services/environment';
import { Item } from 'src/app/components/spica-item-list/spica-item-list.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-teacher-page',
  templateUrl: './teacher-page.page.html',
  styleUrls: ['./teacher-page.page.scss'],
})
export class TeacherPagePage implements OnInit {
  teacher: Teacher;
  listItems: Item[] = [];
  teacherVideos: Video[];
  option = {
    spaceBetween: 10,
    speed: 500,
    slidesPerView: 2,
  };
  constructor(
    private _route: ActivatedRoute,
    private _authService: AuthService
  ) {
    this._authService.initBucket();
  }
  async ngOnInit() {
    this.teacher = await this.getTeacher(this._route.snapshot.params.id);
    console.log(this.teacher);
    this.listItems = [
      { key: 'name', value: '', seperate: true },
      { key: 'surname', value: '', seperate: true },
      { key: 'gender', value: '', seperate: true },
    ];
    this.listItems.forEach(
      (item) =>
        (item.value = this.teacher[item.key] ? this.teacher[item.key] : '')
    );
    this.teacherVideos = await this.getTeacherVideos();
  }
  async getTeacher(id) {
    return teacher.get(id, { queryParams: { relation: true } });
  }
  async getTeacherVideos() {
    return video.getAll({
      queryParams: { relation: true, filter: { teacher: this.teacher._id } },
    });
  }
}
