import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  template: `
    <div class="viewContainer" [ngClass]="theme ? 'light' : 'dark'">
      <div class="contextIntro">
      <h1>CONTENT</h1>
      </div>
    </div>
  `,
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
