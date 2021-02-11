import { Component, Inject, OnInit } from '@angular/core';
import { EducationFacade } from '@dges/store/education/firebase';
import { JobsFacade } from '@dges/store/jobs/firebase';
import { ProjectsFacade } from '@dges/store/projects/firebase';
import { Education } from '@dges/types/education';
import { Job } from '@dges/types/job';
import { Project } from '@dges/types/project';
import { combineLatest, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'dges-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements OnInit {
  years = [2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013];

  jobs$: Observable<Job[]>;
  projects$: Observable<Project[]>;
  educations$: Observable<Education[]>;

  allCards$;

  timelineLastYear: number;
  timelineFirstYear: number;

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
    this.jobs$ = this.jobsFacade.allJobs$;
    this.educations$ = this.educationFacade.allEducation$;
    this.projects$ = this.projectsFacade.allProjects$;
    this.allCards$ = combineLatest([
      this.jobs$,
      this.educations$,
      this.projects$,
    ]).pipe(
      map(([jobs$, educations$, projects$]) => [
        ...jobs$.map((job: Job) => {
          const jobWithType: Job & { type: string } = { ...job, type: 'job' };
          return jobWithType;
        }),
        ...educations$.map((education: Education) => {
          const educationWithType: Education & { type: string } = {
            ...education,
            type: 'education',
          };
          return educationWithType;
        }),
        ...projects$.map((project: Project) => {
          const projectWithType: Project & { type: string } = {
            ...project,
            type: 'project',
          };
          return projectWithType;
        }),
      ]),
      map((a) =>
        a.sort((a, b) => {
          const year = a.endDate.getFullYear();
          if (year <= this.timelineLastYear) {
            this.timelineLastYear = year;
          }
          if (year > this.timelineFirstYear) {
            this.timelineFirstYear = year;
          }
          return a.endDate.getTime() - b.endDate.getTime();
        })
      ),
      tap(() => {
        for (let i = this.timelineFirstYear; i < this.timelineFirstYear; i++) {
          this.years = [];
          this.years.push(i);
        }
        this.years = [].concat(this.years)
      })
    );
    this.jobsFacade.init();
    this.projectsFacade.loadProjects();
    this.educationFacade.loadEducation();

    // this.all$ = mergeMap(this.jobs$, this.educations$, this.projects$);
    console.log('');
  }

  isInYear(year: number, endDate: Date) {
    return endDate.getFullYear() === year;
  }

  setStyle(number: number) {
    return (
      "url('https://source.unsplash.com/random/" + number + "/?wallpapers')"
    );
  }
}
