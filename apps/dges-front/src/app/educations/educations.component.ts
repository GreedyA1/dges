import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EducationFacade } from '@dges/store/education/firebase';
import { Education } from '@dges/types/education';
import { UploadFacade } from '@dges/types/facades/upload-facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'dges-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.scss'],
})
export class EducationsComponent implements OnInit {
  education$: Observable<Education[]>;
  loading$: Observable<boolean>;


  constructor(
    public dialog: MatDialog,
    @Inject('UploadFacade') private uploadFacade: UploadFacade,
    @Inject('EducationFacade') private educationFacade: EducationFacade
  ) {}

  ngOnInit(): void {
    this.education$ = this.educationFacade.loadEducation();
    this.loading$ = this.educationFacade.loaded$;
  }
}
