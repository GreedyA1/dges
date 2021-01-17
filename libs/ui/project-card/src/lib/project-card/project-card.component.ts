import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Project } from '@dges/types/project';

@Component({
  selector: 'dges-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent {
  @Input() project: Project;
  @Input() loggedIn: boolean;
  @Output() edit = new EventEmitter<Project>();
  @Output() delete = new EventEmitter<Project>();

  onDelete() {
    this.delete.emit(this.project);
  }

  onEdit() {
    this.edit.emit(this.project);
  }
}
