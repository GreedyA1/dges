import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobCardComponent } from './job-card/job-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [JobCardComponent],
  exports: [JobCardComponent],
})
export class UiJobCardModule {}
