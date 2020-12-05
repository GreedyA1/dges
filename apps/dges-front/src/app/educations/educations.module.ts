import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationsRoutingModule } from './educations-routing.module';
import { EducationsComponent } from './educations.component';


@NgModule({
  declarations: [EducationsComponent],
  imports: [
    CommonModule,
    EducationsRoutingModule
  ]
})
export class EducationsModule { }
