import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsControlPanelComponent } from './skills-control-panel/skills-control-panel.component';

const routes: Routes = [
  {
    path: 'skills-panel',
    component: SkillsControlPanelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
