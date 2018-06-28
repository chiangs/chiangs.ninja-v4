import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSlideToggle } from '@angular/material';
import { Subscription } from 'rxjs';
import { ThemeSelectService } from '../../services/theme-select.service';
import { DeviceSizeService } from '../../services/device-size.service';
import { ScrollService } from '../../services/scroll.service';
import { Router } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  template: `
    <nav [ngClass]="theme ? 'light' : 'dark'">
    <ul class="container">
      <div class="brandContainer" (click)="goTo('/')">
        <img class="link brand" src="../../../assets/images/icon-s.svg">
      </div>
      <mat-slide-toggle class="themeToggle" [checked]="checked" [labelPosition]="'before'" (change)="onToggleTheme($event)">
        </mat-slide-toggle>
        <div class="links">
          <li *ngFor="let item of viewContent.navLinks">
          <a>{{ item }}</a>
            </li>
          <li id="navBlogLink" rel="noopener" (click)="goToBlog()">{{ viewContent.blogNavTitle }}</li>
        </div>
        <div class="navEnd link" *ngIf="!isMobilePhone" (click)="scrollToFooter('footer')">@</div>
        <app-language-switcher [side]="'right'"></app-language-switcher>
      </ul>
    </nav>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  themeSub: Subscription;
  langSub: Subscription;
  theme: boolean;
  checked: boolean;
  isMobilePhone: boolean;
  blogLink: string;
  viewContent: { navLinks: string[]; blogNavTitle: string };
  enContent = { navLinks: [`design`, `code`, `create`], blogNavTitle: `write` };
  noContent = { navLinks: [`design`, `kode`, `skabe`], blogNavTitle: `skrive` };
  dkContent = {
    navLinks: [`design`, `kode`, `skape`],
    blogNavTitle: `skrive`
  };

  constructor(
    private router: Router,
    private themeSvc: ThemeSelectService,
    private isMobileSvc: DeviceSizeService,
    private scrollSvc: ScrollService,
    private langSvc: LanguageService
  ) {
    this.blogLink = `https://dev.to/chiangs`;
  }

  ngOnInit() {
    this.themeSub = this.themeSvc.getTheme().subscribe(theme => {
      this.checked = theme;
      this.theme = theme;
    });
    this.langSub = this.langSvc.getLang().subscribe(language => {
      this.viewContent = this.langSvc.langSwitchHandler(
        language,
        this.enContent,
        this.noContent,
        this.dkContent
      );
    });
    this.isMobilePhone = this.isMobileSvc.isMobilePhonePortrait();
  }

  ngOnDestroy() {
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
    window.open(this.blogLink, '_blank');
  }

  scrollToFooter(className: string): void {
    this.scrollSvc.scrollTo(className);
  }
}
