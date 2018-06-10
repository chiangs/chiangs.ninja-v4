import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LanguageService } from './services/language.service';
import { en, dk, no } from './constants';

@Component({
  selector: 'app-root',
  template: `
  <div class="app">
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./app.component.scss']
})

// <div class="app" >
//   <app-navbar class="header" * ngIf="!isLanding" > </app-navbar>
//     < router - outlet > </router-outlet>
//     < /div>
//     < app - footer class="footer" * ngIf="!isLanding" > </app-footer>
export class AppComponent implements OnInit {
  langSub: Subscription;
  isLanding: boolean;
  title = `Chiangs.Ninja`;
  defaultLang = en;

  constructor(private router: Router, private langSvc: LanguageService) {
    this.setLanguage();
  }

  ngOnInit() {
    this.router.events.subscribe(
      res =>
        (this.isLanding = this.router.url.includes('/welcome') ? true : false)
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
