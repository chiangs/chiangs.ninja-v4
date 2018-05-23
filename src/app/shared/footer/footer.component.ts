import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Me } from '../../models/me.model';
import { MeService } from '../../services/me.service';
import { ThemeSelectService } from '../../services/theme-select.service';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-footer',
  template: `
    <div class="footerContainer" [ngClass]="theme ? 'light' : 'dark'">
      <div class="myInformation">
        <span class="meInfo fullName">{{ me.firstName }} {{ me.middleName }} {{ me.lastName }}</span>
        <span class="meInfo email">{{ me.email }}</span>
        <span class="meInfo location">{{ me.location.coordinates.lat }}, {{ me.location.coordinates.lng }} || {{ me.location.city }}, {{ me.location.country }}</span>
        <span class="meInfo languages">{{ me.languages }}</span>
        <span class="meInfo freelanceStatus">{{ me.freelanceStatus }}</span>
        <span class="meInfo beliefs">{{ me.beliefs }}</span>
        <span class="meInfo goals">{{ me.goals }}</span>
        <span class="meInfo story">{{ me.story }}</span>
      </div>
      <div class="socialLinks">
        <app-social-media-links [me]="me" [orientation]="socialLinksOrientation"></app-social-media-links>
    </div>
      <div class="siteControls">
        <p class="link backToLanding" (click)="backToLanding()">{{ navToLanding }}</p>
        <p class="link resetGuide" (click)="resetGuidedTour()">{{ resetGuide }}</p>
        <p class="link scrollButtonUp" (click)="scrollToHeader('header')">{{ backToTop }}</p>
      </div>
    </div>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  me: Me;
  socialLinksOrientation: string;
  themeSub: Subscription;
  theme: boolean;
  backToTop: string;
  navToLanding: string;
  resetGuide: string;

  constructor(
    private meSvc: MeService,
    private themeSvc: ThemeSelectService,
    private scrollSvc: ScrollService,
    private router: Router
  ) {
    this.me = this.meSvc.getMe();
    this.themeSub = this.themeSvc
      .getTheme()
      .subscribe(theme => (this.theme = theme));
    this.socialLinksOrientation = 'horizontal';
    this.backToTop = `Back to Top`;
    this.navToLanding = `Back to Landing`;
    this.resetGuide = `Reset Guided Tour`;
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.themeSub) {
      this.themeSub.unsubscribe();
    }
  }

  scrollToHeader(className: string): void {
    this.scrollSvc.scrollTo(className);
  }

  backToLanding(): void {
    this.router.navigate(['/']);
  }
  resetGuidedTour(): void {
    this.themeSvc.resetGuide();
  }
}
