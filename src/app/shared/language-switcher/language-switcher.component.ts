import { Component, OnInit } from '@angular/core';
import { en, dk, no } from '../../constants';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-language-switcher',
  template: `
    <span class="link langSwitch enSwitch"(click)="langSwitch(english)">English</span>
    <span class="link langSwitch enSwitch"(click)="langSwitch(dansk)">Dansk</span>
    <span class="link langSwitch enSwitch"(click)="langSwitch(norsk)">Norsk</span>
  `,
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent implements OnInit {
  english = en;
  dansk = dk;
  norsk = no;

  constructor(private langSvc: LanguageService) {}

  ngOnInit() {}

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
  }
}
