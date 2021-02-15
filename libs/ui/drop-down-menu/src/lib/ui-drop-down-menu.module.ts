import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownMenuComponent } from './drop-down-menu/drop-down-menu.component';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  imports: [CommonModule, RouterModule, MatMenuModule, ],
  declarations: [DropDownMenuComponent],
  exports: [DropDownMenuComponent],
})
export class UiDropDownMenuModule {}
