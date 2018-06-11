import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSlideToggle } from '@angular/material';
import { Subscription } from 'rxjs';
import { ThemeSelectService } from '../../services/theme-select.service';
import { DeviceSizeService } from '../../services/device-size.service';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-navbar',
  template: `
    <nav [ngClass]="theme ? 'light' : 'dark'">
      <ul class="container">
        <mat-slide-toggle class="themeToggle" [checked]="checked" [labelPosition]="'before'" (change)="onToggleTheme($event)">
          <img class="brand" src="../../../assets/images/icon-s.svg">
        </mat-slide-toggle>
        <div class="links">
          <li routerLinkActive="active" 
            [routerLinkActiveOptions]="{exact: true}" 
            [routerLink]="item"
            *ngFor="let item of navLinks">.{{ item }}</li>
          <li id="navBlogLink" rel="noopener" (click)="goToBlog()">{{ blogNavTitle }}</li>
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
  theme: boolean;
  checked: boolean;
  isMobilePhone: boolean;
  navLinks: string[];
  blogLink: string;
  blogNavTitle: string;

  constructor(
    private themeSvc: ThemeSelectService,
    private isMobileSvc: DeviceSizeService,
    private scrollSvc: ScrollService
  ) {
    this.themeSub = this.themeSvc.getTheme().subscribe(theme => {
      this.checked = theme;
      this.theme = theme;
    });
  }

  ngOnInit() {
    this.isMobilePhone = this.isMobileSvc.isMobilePhonePortrait();
    this.navLinks = ['design', 'code', 'create'];
    this.blogLink = 'https://dev.to/chiangs';
    this.blogNavTitle = '.write';
  }

  ngOnDestroy() {
    if (this.themeSub) {
      this.themeSub.unsubscribe();
    }
  }

  onToggleTheme(event: any): void {
    this.themeSvc.setTheme(event.checked);
  }

  goToBlog(): void {
    window.open(this.blogLink, '_blank');
  }

  scrollToFooter(className: string): void {
    this.scrollSvc.scrollTo(className);
  }
}
