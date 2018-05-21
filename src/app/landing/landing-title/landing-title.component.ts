import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { MatSlideToggle } from '@angular/material';
import { ThemeSelectService } from '../../services/theme-select.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-landing-title',
  template: `
  <h1>
    <span class="title firstName">{{ firstName }}</span>
    <span class="title lastName">{{ lastName }}</span>
    <mat-slide-toggle class="themeToggle" [checked]="checked" (change)="onToggleTheme($event)"></mat-slide-toggle>
     <img src="../../assets/images/icons/arrow-alt-left.svg" class="leftArrow" 
     *ngIf="!isArrowHidden" [ngClass]="!isArrowHidden ? 'moving' : 'hidden'">
  </h1>
  `,
  styleUrls: ['./landing-title.component.scss']
})
export class LandingTitleComponent implements OnInit, OnDestroy {
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() isArrowHidden: boolean;
  themeSub: Subscription;
  checked: boolean;

  constructor(private themeSvc: ThemeSelectService) {
    !this.firstName
      ? (this.firstName = 'First Name needed')
      : (this.firstName = this.firstName);
    !this.lastName
      ? (this.lastName = 'First Name needed')
      : (this.lastName = this.lastName);
    this.themeSub = this.themeSvc
      .getTheme()
      .subscribe(theme => (this.checked = theme));
  }

  ngOnInit() {}

  ngOnDestroy() {
    if (this.themeSub) {
      this.themeSub.unsubscribe();
    }
  }

  onToggleTheme(event: any): void {
    this.themeSvc.setTheme(event.checked);
    this.isArrowHidden = true;
  }
}
