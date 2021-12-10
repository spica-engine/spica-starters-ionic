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

  projects = [];

  gotoProject(route) {
    // this._router.navigate([route]);
    this._router.navigateByUrl(route, {
      replaceUrl: true,
    });
    this.clickedProject.emit();
  }
  ngOnInit() {
    this.projects = [
      {
        name: 'Food Delivery',
        route: '/food-delivery/home',
        icon: 'fast-food-outline',
      },
      {
        name: 'Fitness Application',
        route: '/fitness',
        icon: 'barbell-outline',
      },
      {
        name: 'E-Commerce Application',
        route: '/e-commerce',
        icon: 'bag-handle-outline',
      },
      {
        name: 'Social Media',
        route: '/social-media',
        icon: 'thumbs-up-outline',
      },
      {
        name: 'Music Streaming',
        route: '/music-streaming',
        icon: 'musical-notes-outline',
      },
      { name: 'Chat', route: '/chat', icon: 'chatbox-ellipses-outline' },
      { name: 'Job Portal', route: '/job-portal', icon: 'filter-outline' },
      { name: 'Portfolio', route: '/portfolio', icon: 'newspaper-outline' },
      { name: 'Store Listing', route: '/store-listing', icon: 'storefront-outline' },
      { name: 'Appointment', route: '/appointment', icon: 'calendar-outline' },
      { name: 'Forum', route: '/forum', icon: 'text-outline' },
    ];
  }
}
