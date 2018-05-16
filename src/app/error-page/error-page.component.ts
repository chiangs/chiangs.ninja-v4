import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  template: `
    <p>
      Oops, this is embarassing, either I haven't finished creating the feature you are looking for, or I've forgotten to merge the branch.
    </p>
  `,
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
