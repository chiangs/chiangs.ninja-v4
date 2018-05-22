import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Me } from '../../models/me.model';
import { ThemeSelectService } from '../../services/theme-select.service';

@Component({
  selector: 'app-social-media-links',
  template: `
  <div class="socialLinks" [ngClass]="orientation">
     <a class="socialLink" href="{{ me.github.url }}" target="_blank">
        <img src="{{ theme ? me.github.iconL : me.github.iconD }}">
      </a>
      <a class="socialLink" href="{{ me.linkedin.url }}" target="_blank">
        <img src="{{ theme ? me.linkedin.iconL : me.linkedin.iconD }}">
      </a>
      <a class="socialLink" href="{{ me.instagram.url }}" target="_blank">
        <img src="{{ theme ? me.instagram.iconL : me.instagram.iconD }}">
      </a>
      <a class="socialLink" href="{{ me.twitter.url }}" target="_blank">
        <img src="{{ theme ? me.twitter.iconL : me.twitter.iconD }}">
      </a>
  </div>
  `,
  styleUrls: ['./social-media-links.component.scss']
})
export class SocialMediaLinksComponent implements OnInit, OnDestroy {
  @Input() me: Me;
  @Input() orientation: string;
  themeSub: Subscription;
  theme: boolean;

  constructor(private themeSvc: ThemeSelectService) {
    this.themeSub = this.themeSvc
      .getTheme()
      .subscribe(theme => (this.theme = theme));
  }

  ngOnInit(): void {
    !this.theme ? (this.theme = false) : (this.theme = this.theme);

    !this.orientation
      ? (this.orientation = 'horizontal')
      : (this.orientation = this.orientation);
  }

  ngOnDestroy(): void {
    if (this.themeSub) {
      this.themeSub.unsubscribe();
    }
  }
}
