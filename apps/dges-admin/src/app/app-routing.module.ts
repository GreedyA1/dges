import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '@dges/ui/login-page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./projects/projects.module').then((m) => m.ProjectsModule),
  },
  {
    path: 'jobs',
    loadChildren: () => import('./jobs/jobs.module').then((m) => m.JobsModule),
  },
  {
    path: 'educations',
    loadChildren: () =>
      import('./educations/educations.module').then((m) => m.EducationsModule),
  },
  {
    path: 'resume',
    loadChildren: () =>
      import('./resume/resume.module').then((m) => m.ResumeModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule),
  },
  // {
  //   path: 'skills-panel',
  //   ...canActivate(adminOnly),
  //   component: SkillsControlPanelComponent
  // },
  {
    path: 'login',
    component: LoginPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
