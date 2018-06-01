import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../services/language.service';
import { en, dk, no } from '../../../constants';

@Component({
  selector: 'app-language-options',
  template: `
    <span class="link langSwitch enSwitch"(click)="langSwitch(english)">English</span>
    <span class="link langSwitch enSwitch"(click)="langSwitch(dansk)">Dansk</span>
    <span class="link langSwitch enSwitch"(click)="langSwitch(norsk)">Norsk</span>
  `,
  styleUrls: ['./language-options.component.scss']
})
export class LanguageOptionsComponent implements OnInit {
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
