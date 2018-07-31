import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { en, dk, no } from '../../constants';
import { LanguageService } from '../../services/language.service';
import { ThemeSelectService } from '../../services/theme-select.service';

@Component({
  selector: 'app-language-switcher',
  template: `
    <div class="languageSelectorIcon"  (click)="toggleMenu()">
      <img src="../../../assets/images/icons/language-blk.svg" *ngIf="theme" (mouseenter)="toggleMenu()">
      <img src="../../../assets/images/icons/language-wht.svg" *ngIf="!theme" (mouseenter)="toggleMenu()">
    </div>
    <div class="languageList" *ngIf="showMenu" 
    [ngClass]="[side === 'left' ? 'left' : 'right',
    theme ? 'light' : 'dark']" (mouseleave)="clickedOutside()">
      <ul class="menuList">
        <li class="link langSwitch enSwitch"(click)="langSwitch(english)">English</li>
        <li class="link langSwitch dkSwitch"(click)="langSwitch(dansk)">Dansk</li>
        <li class="link langSwitch noSwitch"(click)="langSwitch(norsk)">Norsk</li>
      </ul>
    </div>
  `,
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent implements OnInit, OnDestroy {
  @Input() side: string;
  themeSub: Subscription;
  theme: boolean;
  english = en;
  dansk = dk;
  norsk = no;
  showMenu = false;

  constructor(
    private langSvc: LanguageService,
    private themeSvc: ThemeSelectService
  ) {}

  ngOnInit() {
    this.themeSub = this.themeSvc
      .getTheme()
      .subscribe(theme => (this.theme = theme));
  }

  langSwitch(language: string): void {
    let newLangSelected;
    switch (language) {
      case en:
        newLangSelected = en;
        break;
      case dk:
        newLangSelected = dk;
        break;
      case no:
        newLangSelected = no;
        break;
      default:
        // newLangSelected = en;
        break;
    }
    this.langSvc.setLang(newLangSelected);
    this.toggleMenu();
  }

  ngOnDestroy(): void {
    if (this.themeSub) {
      this.themeSub.unsubscribe();
    }
  }

  clickedOutside(): void {
    this.showMenu = false;
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }
}
