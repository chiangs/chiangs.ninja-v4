import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { MatButton } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { Me } from '../models/me.model';
import { MeService } from '../services/me.service';
import { ThemeSelectService } from '../services/theme-select.service';
import { DeviceSizeService } from '../services/device-size.service';

@Component({
  selector: 'app-landing',
  template: `
    <div class="landingContainer" [ngClass]="theme ? 'light' : 'dark'">
    <div class="landingTitle">
      <app-landing-title [firstName]="me.firstName" [lastName]="me.lastName" [isArrowHidden]="isArrowHidden"></app-landing-title>
    </div>
    <div class="landingSubTitle">
      <app-landing-tagline [tagline]="me.tagline"></app-landing-tagline>
    </div>
    <div class="menu">
      <ul class="menuList">
        <li><button mat-button color="accent" class="ctaButton" (click)="goToDesign()">Design</button></li>
        <li><button mat-button color="accent" class="ctaButton" (click)="goToProjects()">Code</button></li>
        <li><button mat-button color="accent" class="ctaButton" (click)="goToGallery()">Create</button></li>
        <li><button mat-button color="accent" class="ctaButton" (click)="goToBlog()" rel="noopener">Write</button></li>
      </ul>
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
  snackbarRef: any;
  isMobile: boolean;
  isPhone: boolean;
  theme: boolean;
  snackbarMsg: string;
  snackbarAction: string;
  isArrowHidden: boolean;
  socialLinksOrientation: string;

  constructor(
    private themeSvc: ThemeSelectService,
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
    this.snackbarMsg = 'Hi, try changing the theme by clicking on the slider.';
    this.snackbarAction = 'Ok, got it!';
    this.socialLinksOrientation = 'vertical';
    this.checkOpenSnackbar();
  }

  ngOnInit(): void {
    this.themeSub = this.themeSvc
      .getTheme()
      .subscribe(theme => (this.theme = theme));
  }

  ngOnDestroy(): void {
    if (this.themeSub) {
      this.themeSub.unsubscribe();
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

  goToProjects(): void {
    this.router.navigate(['/code']);
  }

  goToGallery(): void {
    this.router.navigate(['/create']);
  }

  goToBlog(): void {
    window.open(this.me.blog, '_blank');
  }
}
