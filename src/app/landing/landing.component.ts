import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  template: `
    <p>
      landing works!
      <app-context-intro></app-context-intro>
      </p>
  `,
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
