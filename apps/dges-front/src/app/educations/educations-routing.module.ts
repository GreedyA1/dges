import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationsComponent } from './educations.component';

const routes: Routes = [
  {path:'', component: EducationsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EducationsRoutingModule { }
