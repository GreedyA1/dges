import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullLengthMenuComponent } from './full-length-menu/full-length-menu.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FullLengthMenuComponent],
  exports: [FullLengthMenuComponent],
})
export class UiFullLengthMenuModule {}
