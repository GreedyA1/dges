import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dges-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {

  years = [2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013];

  constructor() {
    console.log('');
  }

  ngOnInit(): void {
    console.log('');
  }

  setStyle(number: number) {
    return 'url(\'https://source.unsplash.com/random/' + number + '\')';
  }
}
