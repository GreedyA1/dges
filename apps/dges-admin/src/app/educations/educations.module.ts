import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationsRoutingModule } from './educations-routing.module';
import { EducationsComponent } from './educations.component';
import { UiEducationCardModule } from '@dges/ui/education-card'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { environment } from '../../environments/environment';
import { AdminModule } from '../admin/admin.module';

@NgModule({
  declarations: [EducationsComponent],
  imports: [
    CommonModule,
    EducationsRoutingModule,
    UiEducationCardModule,
    MatButtonModule,
    MatIconModule,
    AdminModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    { provide: 'UploadFacade', useClass: environment.uploadFacade },
    { provide: 'EducationFacade', useClass: environment.educationFacade },
  ],
})
export class EducationsModule {}
