import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Project } from '@dges/types/project';

@Component({
  selector: 'dges-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardComponent implements OnInit{
  @Input() project: Project;
  @Input() loggedIn: Boolean;
  @Output() edit = new EventEmitter<Project>();
  @Output() delete = new EventEmitter<Project>();

  constructor(){
  }

  ngOnInit() {

  }

  reasignDate(): void {
    
  }

  onDelete() {
    this.delete.emit(this.project);
  }

  onEdit() {
    this.edit.emit(this.project);
  }
}
