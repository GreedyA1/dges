import {Component, ChangeDetectionStrategy, Input} from '@angular/core';
import {Project} from "@dges/types/project";

@Component({
  selector: 'dges-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {

  @Input() project: Project;

}
