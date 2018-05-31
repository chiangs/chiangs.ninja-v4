import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LanguageService } from './services/language.service';
import { en, dk, no } from './constants';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar class="header" *ngIf="!isLanding"></app-navbar>
    <router-outlet></router-outlet>
    <app-footer class="footer" *ngIf="!isLanding"></app-footer>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  langSub: Subscription;
  isLanding: boolean;
  title = `Chiangs.Ninja`;
  defaultLang = en;

  constructor(private router: Router, private langSvc: LanguageService) {
    navigator.language
      ? this.langSvc.setLang(navigator.language)
      : this.langSvc.setLang(this.defaultLang);
  }

  ngOnInit() {
    this.router.events.subscribe(
      res =>
        (this.isLanding = this.router.url.includes('/welcome') ? true : false)
    );
  }
}
