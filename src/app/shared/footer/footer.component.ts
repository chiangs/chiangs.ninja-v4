import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription, fromEvent } from 'rxjs';
import { Me } from '../../models/me.model';
import { MeService } from '../../services/me.service';
import { ThemeSelectService } from '../../services/theme-select.service';
import { ScrollService } from '../../services/scroll.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  template: `
    <div class="section footerContainer" [ngClass]="theme ? 'light' : 'dark'">
      <div class="column myInformation leftColumn">
        <div class="column meInfo profilePic">
          <img class="profilePicImg" src="../../../assets/images/profilePic.png" alt="profile image"/>
        </div>
        <div class="column meInfo">
          <h4 class="fullName">{{ me.firstName }} {{ me.middleName }} {{ me.lastName }}</h4>
          <a href="mailto:stephen.e.chiang@gmail.com">
            <img class="emailIcon" src="../../../assets/images/icons/email-blu.svg">{{ me.email }}
          </a>
          <div class="section badges">
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src="../../../assets/images/badge-umbraco-xp.png" alt="Umbraco Professional Badge" height="30" width="30"/>
            </a>
            <a href="https://dev.to/chiangs" rel="noopener noreferrer">
              <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Stephen E. Chiang's DEV Profile" height="30" width="30" />
            </a>
        </div>
      </div>
      <div class="column myInformation middleColumn">
        <div class="section socialLinks">
          <app-social-media-links [me]="me" [orientation]="socialLinksOrientation"></app-social-media-links>
        </div>
        <div class="section language">
          <div class="column languageItem" *ngFor="let language of me.languages">
            {{ language.lang}}
            <br>
            [{{ language.skillLvl }}]
          </div>
        </div>
        <div class="section location">
          {{ me.location.coordinates.lat }}, {{ me.location.coordinates.lng }}&nbsp;&nbsp;&nbsp;•
          &nbsp;&nbsp;{{ me.location.city }}, {{ me.location.country }}&nbsp;&nbsp;&nbsp;•
          &nbsp;&nbsp;
          <span class="freelanceStatus">{{ me.freelanceStatus }}</span>
        </div>
      </div>

      <div class="column myInformation rightColumn">
        <div class="column rightAligned siteControls">
          <ul>
            <li><p class="link backToLanding" (click)="backToLanding()">{{ viewContent.navToLanding }}</p></li>
            <li><p class="link resetGuide" (click)="resetGuidedTour()">{{ viewContent.resetGuide }}</p></li>
            <li><p class="link scrollButtonUp" (click)="scrollToHeader('header')">{{ viewContent.backToTop }}</p></li>
          </ul>
        </div>
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
    // this.router.events.subscribe(event => {
    //   if (event instanceof NavigationEnd) {
    //     const body = document.getElementById('body');
    //     const docHeight = body.getBoundingClientRect();
    //     console.log( docHeight.height );
    //     if ( docHeight.height > 700px && isMobile) {
    //   this.showScrollTopBtn = true;
    // };
    //   }
    // });
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
