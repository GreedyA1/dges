import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@dges/types/auth';

@Component({
  selector: 'dges-drop-down-menu',
  templateUrl: './drop-down-menu.component.html',
  styleUrls: ['./drop-down-menu.component.scss'],
})
export class DropDownMenuComponent {
  @Input() fillerNav: [] = [];
  @Input() user$: Observable<User>; 
}
