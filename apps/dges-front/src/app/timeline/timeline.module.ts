import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineRoutingModule } from './timeline-routing.module';
import { TimelineComponent } from './timeline.component';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [TimelineComponent],
  imports: [CommonModule, TimelineRoutingModule],
  providers: [
    { provide: 'UploadFacade', useClass: environment.uploadFacade },
    { provide: 'JobsFacade', useClass: environment.jobsFacade },
    { provide: 'EducationFacade', useClass: environment.educationFacade },
  ],
})
export class TimelineModule {}
