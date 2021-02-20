import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { canActivate, loggedIn } from '@angular/fire/auth-guard';
import { SkillsControlPanelComponent } from './skills-control-panel/skills-control-panel.component';

const adminOnly = () => loggedIn;

const routes: Routes = [
  {
    path: 'skills-panel',
    ...canActivate(adminOnly),
    component: SkillsControlPanelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
