import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from './services/language.service';

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
  title = 'Chiangs.Ninja';
  isLanding: boolean;

  constructor(private router: Router, private langSvc: LanguageService) {}

  ngOnInit() {
    this.router.events.subscribe(
      res =>
        (this.isLanding = this.router.url.includes('/welcome') ? true : false)
    );
  }
}
