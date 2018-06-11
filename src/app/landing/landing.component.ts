import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Me } from '../models/me.model';
import { DeviceSizeService } from '../services/device-size.service';
import { LanguageService } from '../services/language.service';
import { MeService } from '../services/me.service';
import { ThemeSelectService } from '../services/theme-select.service';

@Component({
  selector: 'app-landing',
  template: `
    <div class="landingContainer" [ngClass]="theme ? 'light' : 'dark'">
      <div class="landingLanguageSelector">
        <app-language-switcher [side]="'left'"></app-language-switcher>
      </div>
    <div class="landingTitle">
      <app-landing-title [firstName]="me.firstName" [lastName]="me.lastName" [isArrowHidden]="isArrowHidden"></app-landing-title>
    </div>
    <div class="landingSubTitle">
      <app-landing-tagline [tagline]="me.tagline"></app-landing-tagline>
    </div>
    <div class="menu">
      <app-menu-list
        (goToDesign)="goToDesign()"
        (goToCode)="goToCode()"
        (goToCreate)="goToCreate()"
        (goToWrite)="goToWrite()"></app-menu-list>
    </div>
    <div class="socialMedia">
      <app-social-media-links [me]="me" [orientation]="socialLinksOrientation" *ngIf="me"></app-social-media-links>
    </div>
  </div>
  `,
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, OnDestroy {
  me: Me;
  themeSub: Subscription;
  langSub: Subscription;
  snackbarRef: any;
  isMobile: boolean;
  isPhone: boolean;
  theme: boolean;
  selectedLanguage: string;
  snackbarMsg: string;
  snackbarAction: string;
  isArrowHidden: boolean;
  socialLinksOrientation: string;
  // Content
  viewContent: { snackbarMsg: string; snackbarAction: string };
  enContent = {
    snackbarMsg: `Hi, try changing the theme by clicking on the slider.`,
    snackbarAction: `Ok, got it!`
  };
  dkContent = {
    snackbarMsg: `Hej, prøv at ændre temaet ved at klikke på skyderen.`,
    snackbarAction: 'Ok, det ved jeg godt!'
  };
  noContent = {
    snackbarMsg: `Hei, prøv å endre temaet ved at klikke på glidebryteren.`,
    snackbarAction: 'Ok, skjønner!'
  };

  constructor(
    private themeSvc: ThemeSelectService,
    private langSvc: LanguageService,
    private meSvc: MeService,
    private isMobileSvc: DeviceSizeService,
    private router: Router,
    private snackbar: MatSnackBar,
    private cd: ChangeDetectorRef
  ) {
    this.me = this.meSvc.getMe();
    this.isMobile = this.isMobileSvc.isMobileDevice();
    this.isPhone = this.isMobileSvc.isMobilePhone();
    this.isArrowHidden = true;
    this.socialLinksOrientation = 'vertical';
    this.themeSub = this.themeSvc
      .getTheme()
      .subscribe(theme => (this.theme = theme));
    this.langSub = this.langSvc.getLang().subscribe(language => {
      this.selectedLanguage = language;
      this.viewContent = this.langSvc.langSwitchHandler(
        this.selectedLanguage,
        this.enContent,
        this.dkContent,
        this.noContent
      );
      this.snackbarMsg = this.viewContent.snackbarMsg;
      this.snackbarAction = this.viewContent.snackbarAction;
    });
    this.checkOpenSnackbar();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.themeSub) {
      this.themeSub.unsubscribe();
    }
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }

  checkOpenSnackbar(): void {
    if (!this.themeSvc.getSeenGuide()) {
      this.openSnackbar(this.snackbarMsg, this.snackbarAction);
    }
  }

  openSnackbar(message: string, action: string): void {
    this.snackbarRef = this.snackbar.open(message, action);
    this.snackbarRef.afterDismissed().subscribe(() => {
      this.revealArrow();
      this.themeSvc.setSeenGuide();
    });
  }

  revealArrow(): void {
    this.isArrowHidden = false;
    this.cd.detectChanges();
  }

  goToDesign(): void {
    this.router.navigate(['/design']);
  }

  goToCode(): void {
    this.router.navigate(['/code']);
  }

  goToCreate(): void {
    this.router.navigate(['/create']);
  }

  goToWrite(): void {
    window.open(this.me.blog, '_blank');
  }
}
