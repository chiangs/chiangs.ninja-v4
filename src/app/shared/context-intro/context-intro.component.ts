import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-context-intro',
  template: `
    <div class="contextContainer">
      <div class="contextTitle">
        <h2 [ngClass]="color">{{ title }}</h2>
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
  @Input() color: string;

  constructor() {
    !this.title ? (this.title = 'default title') : (this.title = this.title);
    !this.tagline
      ? (this.tagline = 'default tagline')
      : (this.tagline = this.tagline);
    !this.color ? (this.color = 'blue') : (this.color = this.color);
  }

  ngOnInit(): void {}
}
