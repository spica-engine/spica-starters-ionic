import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'spica-starter-projects',
  templateUrl: './starter-projects.component.html',
  styleUrls: ['./starter-projects.component.scss'],
})
export class StarterProjectsComponent implements OnInit {
  @Output() clickedProject: EventEmitter<any> = new EventEmitter();
  constructor(private _router: Router) {}
  gotoProject(route) {
    // this._router.navigate([route]);
    this._router.navigateByUrl(route, {
      replaceUrl: true,
    });
    this.clickedProject.emit();
  }
  ngOnInit() {}
}
