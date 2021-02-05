import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dges-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {

  yo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];

  constructor() {
    console.log('');
  }

  ngOnInit(): void {
    console.log('');
  }

  random(){
    return Math.random(); 
  }
}
