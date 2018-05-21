import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-landing-tagline',
  template: `
  <span class="landingS">
    <div class="landingIcon">
      <img src="../../../assets/images/icon-s.svg" alt="s-icon">
    </div>
    <div class="tagline">
      <h2>{{ tagline }}</h2>
    </div>
  </span>
  `,
  styleUrls: ['./landing-tagline.component.scss']
})
export class LandingTaglineComponent implements OnInit {
  @Input() tagline: string;

  constructor() {
    !this.tagline
      ? (this.tagline = 'Tagline needed')
      : (this.tagline = this.tagline);
  }

  ngOnInit() {}
}
