import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Job } from '@dges/types/job'

@Component({
  selector: 'dges-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent {

  @Input() job: Job;
  @Input() loggedIn: boolean;
  @Output() edit = new EventEmitter<Job>();
  @Output() delete = new EventEmitter<Job>();

  onDelete() {
    this.delete.emit(this.job);
  }

  onEdit() {
    this.edit.emit(this.job);
  }

}
