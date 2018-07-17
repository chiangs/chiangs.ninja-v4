import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { en } from './constants';
import { DeviceSizeService } from './services/device-size.service';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  template: `
  <div class="app">
    <app-navbar class="header" *ngIf="!isLanding && !isPhone"></app-navbar>
    <app-navbar-mobile *ngIf="!isLanding && isPhone"></app-navbar-mobile>
    <div class="masterContainer">
      <router-outlet></router-outlet>
    </div>
    <app-footer class="footer" *ngIf="!isLanding"></app-footer>
  </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  langSub: Subscription;
  isLanding: boolean;
  title = `Chiangs.Ninja`;
  defaultLang = en;
  isPhone = false;
  constructor(
    private router: Router,
    private langSvc: LanguageService,
    private deviceSvc: DeviceSizeService
  ) {
    this.setLanguage();
  }

  ngOnInit() {
    this.isPhone = this.deviceSvc.isPhone();
    this.router.events.subscribe(
      res =>
        (this.isLanding =
          this.router.url.includes('design') ||
          this.router.url.includes('code') ||
          this.router.url.includes('create')
            ? false
            : true)
    );
  }

  setLanguage(): void {
    if (localStorage.getItem('language')) {
      this.langSvc.setLang(localStorage.getItem('language'));
    } else {
      navigator.language
        ? this.langSvc.setLang(navigator.language)
        : this.langSvc.setLang(this.defaultLang);
    }
  }
}
