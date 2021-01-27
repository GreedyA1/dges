import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, loggedIn } from '@angular/fire/auth-guard';
import { AdminRoutingModule } from './admin/admin-routing.module';

const adminOnly = () => loggedIn;

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'timeline' },
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
    ...canActivate(adminOnly),
    loadChildren: () =>
      import('./educations/educations.module').then((m) => m.EducationsModule),
  },
  {
    path: 'certificates',
    loadChildren: () =>
      import('./certificates/certificates.module').then(
        (m) => m.CertificatesModule
      ),
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
  {
    path: 'timeline',
    loadChildren: () =>
      import('./timeline/timeline.module').then((m) => m.TimelineModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }), AdminRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
