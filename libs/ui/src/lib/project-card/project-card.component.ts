import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dges-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent implements OnInit {
  constructor() {
    console.log('test');
  }

  ngOnInit(): void {
    console.log('test');
  }
}
