import { Component, Inject, OnInit } from '@angular/core';
import { EducationFacade } from '@dges/store/education/firebase';
import { JobsFacade } from '@dges/store/jobs/firebase';
import { ProjectsFacade } from '@dges/store/projects/firebase';

@Component({
  selector: 'dges-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  years = [2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013];

  constructor(
    @Inject('JobsFacade') private jobsFacade: JobsFacade,
    @Inject('EducationFacade') private educationFacade: EducationFacade,
    @Inject('ProjectsFacade') private projectsFacade: ProjectsFacade
  ) {
    console.log('');
  }

  ngOnInit(): void {
    //TODO combine all cards
    //display them on timeline
    console.log('');
  }

  setStyle(number: number) {
    return "url('https://source.unsplash.com/random/" + number + "')";
  }
}
