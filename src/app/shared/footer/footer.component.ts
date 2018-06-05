import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Me } from '../../models/me.model';
import { MeService } from '../../services/me.service';
import { ThemeSelectService } from '../../services/theme-select.service';
import { ScrollService } from '../../services/scroll.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  template: `
    <div class="footerContainer" [ngClass]="theme ? 'light' : 'dark'">
      <div class="myInformation">
        <div class="meInfo profilePic">
          <img class="profilePicImg" src="../../../assets/images/profilePic.png" />
        </div>

        <div class="meInfo fullName">
          <h4>{{ me.firstName }} {{ me.middleName }} {{ me.lastName }}</h4>
        </div>

        <div class="meInfo email">
          <p>
            <a href="mailto:stephen.e.chiang@gmail.com">{{ me.email }}</a>
          </p>
        </div>

        <div class="meInfo languages">
          <span class="language" *ngFor="let langauge of me.languages">
            <p>{{ langauge.lang }} - {{ langauge.skillLvl }}</p>
          </span>
        </div>
      </div>

      <div class="meInfo location">
        {{ me.location.coordinates.lat }}, {{ me.location.coordinates.lng }}&nbsp;&nbsp;&nbsp;•
        &nbsp;&nbsp;{{ me.location.city }}, {{ me.location.country }}&nbsp;&nbsp;&nbsp;•
        &nbsp;&nbsp;<span class="freelanceStatus">{{ me.freelanceStatus }}</span>
      </div>
      <div class="socialLinks">
        <app-social-media-links [me]="me" [orientation]="socialLinksOrientation"></app-social-media-links>
      </div>
      <div class="siteControls">
        <p class="link backToLanding" (click)="backToLanding()">{{ viewContent.navToLanding }}</p>
        <p class="link resetGuide" (click)="resetGuidedTour()">{{ viewContent.resetGuide }}</p>
        <p class="link scrollButtonUp" (click)="scrollToHeader('header')">{{ viewContent.backToTop }}</p>
      </div>
    </div>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  viewContent: { navToLanding: string; resetGuide: string; backToTop: string };
  enContent = {
    navToLanding: `Back to Landing`,
    resetGuide: `Reset Guided Tour`,
    backToTop: `Back to Top`
  };
  dkContent = {
    navToLanding: `Tilbage til landing`,
    resetGuide: `Genstart Guided Tour`,
    backToTop: `Tilbage til toppen`
  };
  noContent = {
    navToLanding: `Tilbake til Landing`,
    resetGuide: `Omstart Guided Tour`,
    backToTop: `Tilbake til toppen`
  };
  me: Me;
  themeSub: Subscription;
  theme: boolean;
  langSub: Subscription;
  language: string;
  socialLinksOrientation: string;

  constructor(
    private router: Router,
    private meSvc: MeService,
    private themeSvc: ThemeSelectService,
    private langSvc: LanguageService,
    private scrollSvc: ScrollService
  ) {
    this.me = this.meSvc.getMe();
    this.socialLinksOrientation = 'horizontal';
  }

  ngOnInit(): void {
    this.themeSub = this.themeSvc
      .getTheme()
      .subscribe(theme => (this.theme = theme));
    this.langSub = this.langSvc.getLang().subscribe(language => {
      this.language = language;
      this.viewContent = this.langSvc.langSwitchHandler(
        this.language,
        this.enContent,
        this.dkContent,
        this.noContent
      );
    });
  }

  ngOnDestroy(): void {
    if (this.themeSub) {
      this.themeSub.unsubscribe();
    }
    if (this.langSub) {
      this.langSub.unsubscribe();
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
