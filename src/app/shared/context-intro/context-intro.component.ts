import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-context-intro',
  template: `
    <div class="contextContainer">
      <div class="contextTitle">
        <h2>{{ title }}</h2>
      </div>

      <div class="contextTagline">
        <h6>{{ tagline }}</h6>
      </div>
    </div>
  `,
  styleUrls: ['./context-intro.component.scss']
})
export class ContextIntroComponent implements OnInit {
  @Input() title: string;
  @Input() tagline: string;

  constructor() {}

  ngOnInit(): void {}
}
