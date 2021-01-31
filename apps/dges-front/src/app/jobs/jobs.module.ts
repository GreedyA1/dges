import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs.component';

import { UiJobCardModule } from '@dges/ui/job-card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AdminModule } from '../admin/admin.module';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [JobsComponent],
  imports: [
    CommonModule,
    JobsRoutingModule,
    UiJobCardModule,
    MatButtonModule,
    MatIconModule,
    AdminModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    { provide: 'UploadFacade', useClass: environment.uploadFacade },
    { provide: 'JobsFacade', useClass: environment.uploadFacade },
  ],
})
export class JobsModule {}
