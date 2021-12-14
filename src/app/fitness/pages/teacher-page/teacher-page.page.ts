import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { teacher,Teacher,initialize } from '../../services/bucket';
import { environment } from '../../services/environment';
import { Item } from 'src/app/components/spica-item-list/spica-item-list.component';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-teacher-page',
  templateUrl: './teacher-page.page.html',
  styleUrls: ['./teacher-page.page.scss'],
})
export class TeacherPagePage implements OnInit {
id:any;
teacher: Teacher;
me: Teacher;
listItems: Item[] = [];
  constructor(private _route: ActivatedRoute, private _authService: AuthService) { 
    this._authService.initBucket();
  }
  async ngOnInit() {
   this.id = this._route.snapshot.params.id;
   this.teacher = await this.getTeacher();
   this.me = this.teacher;   
   this.listItems = [
    { key: 'name', value: '', seperate: true },
    { key: 'surname', value: '', seperate: true },
    { key: 'gender', value: '', seperate: true },
  ];
  this.listItems.forEach(
    (item) => (item.value = this.teacher[item.key] ? this.teacher[item.key] : '')
  );
 
  }
  async getTeacher () {
    return teacher.get(this.id);
  }

}
