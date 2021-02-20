import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthFacade } from '@dges/store/auth/firebase';
import { EducationFacade } from '@dges/store/education/firebase';
import { User } from '@dges/types/auth';
import { Education } from '@dges/types/education';
import { UploadFacade } from '@dges/types/facades/upload-facade';
import { Observable } from 'rxjs';
import { AddEducationComponent } from '../admin/add-education/add-education.component';

@Component({
  selector: 'dges-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.scss'],
})
export class EducationsComponent implements OnInit {
  user$: Observable<User>;
  education$: Observable<Education[]>;
  loading$: Observable<boolean>;


  constructor(
    private authFacade: AuthFacade,
    public dialog: MatDialog,
    @Inject('UploadFacade') private uploadFacade: UploadFacade,
    @Inject('EducationFacade') private educationFacade: EducationFacade
  ) {}

  ngOnInit(): void {
    this.education$ = this.educationFacade.loadEducation();
    this.loading$ = this.educationFacade.loaded$;
    this.user$ = this.authFacade.loadUser();
  }

  addEducation(): void {
    this.dialog.open(AddEducationComponent, {
      panelClass: 'full-screen-dialog',
    });
  }
}
