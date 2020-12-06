import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dges-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  constructor() {
    console.log('test');
  }

  ngOnInit(): void {
    console.log('test');
  }
}
