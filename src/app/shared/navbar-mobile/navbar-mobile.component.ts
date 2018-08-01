import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../services/language.service';
import { ScrollService } from '../../services/scroll.service';
import { ThemeSelectService } from '../../services/theme-select.service';

@Component({
  selector: 'app-navbar-mobile',
  template: `
    <nav [ngClass]="checked ? 'light' : 'dark'">
      <div class="section mobileNavContainer">
        <div class="column brandContainer">
          <img class="link brand" src="../../../assets/images/icon-s.svg" alt="S brand" (click)="goTo('/')">
          <mat-slide-toggle class="themeToggle" [checked]="checked" [labelPosition]="'before'" (change)="onToggleTheme($event)">
          </mat-slide-toggle>
        </div>
        <div class="column name">
          <span class="title firstName">Stephen</span>
          <span class="title lastName">Chiang</span>
        </div>
      </div>
      <div class="section menu">
        <ul class="menuList" *ngIf="checked">
          <li (click)="goTo(designUrl)"><i class='bx bxs-layout'></i></li>
          <li (click)="goTo(codeUrl)"><i class='bx bx-code'></i></li>
          <li (click)="goTo(createUrl)"><i class='bx bxs-cube'></i></li>
          <li (click)="goToBlog()"><i class='bx bxs-pencil'></i></li>
          <li (click)="scrollToFooter('footer')"><i class='bx bx-skull'></i></li>
        </ul>
        <ul class="menuList" *ngIf="!checked">
          <li (click)="goTo(designUrl)"><i class='bx bx-layout'></i></li>
          <li (click)="goTo(codeUrl)"><i class='bx bx-code'></i></li>
          <li (click)="goTo(createUrl)"><i class='bx bx-cube'></i></li>
          <li (click)="goToBlog()"><i class='bx bx-pencil'></i></li>
          <li (click)="scrollToFooter('footer')"><i class='bx bx-skull'></i></li>
        </ul>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar-mobile.component.scss']
})
export class NavbarMobileComponent implements OnInit, OnDestroy {
  langSub: Subscription;
  themeSub: Subscription;
  checked: boolean;
  viewContent: {};
  enContent = {};
  dkContent = {};
  noContent = {};
  designUrl = `design`;
  codeUrl = `code`;
  createUrl = `create`;
  writeUrl = `https://dev.to/chiangs`;
  socialMedia = `@`;

  constructor(
    private router: Router,
    private themeSvc: ThemeSelectService,
    private langSvc: LanguageService,
    private scrollSvc: ScrollService
  ) {}

  ngOnInit() {
    this.themeSub = this.themeSvc.getTheme().subscribe(theme => {
      this.checked = theme;
    });
    this.langSub = this.langSvc.getLang().subscribe(language => {
      this.viewContent = this.langSvc.langSwitchHandler(
        language,
        this.enContent,
        this.noContent,
        this.dkContent
      );
    });
  }

  ngOnDestroy() {
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
    if (this.themeSub) {
      this.themeSub.unsubscribe();
    }
  }

  onToggleTheme(event: any): void {
    this.themeSvc.setTheme(event.checked);
  }

  goTo(url: string): void {
    this.router.navigate([url]);
  }

  goToBlog(): void {
    window.open(this.writeUrl, '_blank', 'noopener');
  }

  scrollToFooter(className: string): void {
    this.scrollSvc.scrollTo(className);
  }
}
