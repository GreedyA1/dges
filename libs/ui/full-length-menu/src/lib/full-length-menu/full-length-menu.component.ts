import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@dges/types/auth';

@Component({
  selector: 'dges-full-length-menu',
  templateUrl: './full-length-menu.component.html',
  styleUrls: ['./full-length-menu.component.scss']
})
export class FullLengthMenuComponent {
  @Input() fillerNav: [] = [];
  @Input() user$: Observable<User>; 
}
