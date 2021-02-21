import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from '@dges/ui/login-page';
import { canActivate, loggedIn } from '@angular/fire/auth-guard';

const adminOnly = () => loggedIn;

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'projects',
  },
  {
    path: 'projects',
    ...canActivate(adminOnly),
    loadChildren: () => import('./projects/projects.module').then((m) => m.ProjectsModule),
  },
  {
    path: 'jobs',
    ...canActivate(adminOnly),
    loadChildren: () => import('./jobs/jobs.module').then((m) => m.JobsModule),
  },
  {
    path: 'educations',
    ...canActivate(adminOnly),
    loadChildren: () =>
      import('./educations/educations.module').then((m) => m.EducationsModule),
  },
  {
    path: 'resume',
    ...canActivate(adminOnly),
    loadChildren: () =>
      import('./resume/resume.module').then((m) => m.ResumeModule),
  },
  {
    path: 'contact',
    ...canActivate(adminOnly),
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule),
  },
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
