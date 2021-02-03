import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Education } from '@dges/types/education';

@Component({
  selector: 'dges-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.scss']
})
export class EducationCardComponent {

  @Input() education: Education;
  @Input() loggedIn: boolean;
  @Output() edit = new EventEmitter<Education>();
  @Output() delete = new EventEmitter<Education>();

  onDelete() {
    this.delete.emit(this.education);
  }

  onEdit() {
    this.edit.emit(this.education);
  }
}
