import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineRoutingModule } from './timeline-routing.module';
import { TimelineComponent } from './timeline.component';
import { environment } from '../../environments/environment';
import { UiJobCardModule } from '@dges/ui/job-card';
import { UiEducationCardModule } from '@dges/ui/education-card';
import { UiProjectCardModule } from '@dges/ui/project-card';
import { ToolsPipesSortByModule } from '@dges/tools/pipes/sort-by';

@NgModule({
  declarations: [TimelineComponent],
  imports: [
    CommonModule,
    TimelineRoutingModule,
    UiJobCardModule,
    UiEducationCardModule,
    UiProjectCardModule,
    ToolsPipesSortByModule,
  ],
  providers: [
    { provide: 'JobsFacade', useClass: environment.jobsFacade },
    { provide: 'EducationFacade', useClass: environment.educationFacade },
    { provide: 'ProjectsFacade', useClass: environment.projectsFacade },
  ],
})
export class TimelineModule {}
