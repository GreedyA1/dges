import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullLengthMenuComponent } from './full-length-menu/full-length-menu.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, RouterModule, MatButtonModule],
  declarations: [FullLengthMenuComponent],
  exports: [FullLengthMenuComponent],
})
export class UiFullLengthMenuModule {}
