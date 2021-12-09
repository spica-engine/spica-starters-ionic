import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-branch-card',
  templateUrl: './branch-card.component.html',
  styleUrls: ['./branch-card.component.scss'],
})
export class BranchCardComponent implements OnInit {

  @Input() card:any;
  constructor() { }

  ngOnInit() {}

}
