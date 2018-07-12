import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../services/language.service';
import { ThemeSelectService } from '../../services/theme-select.service';

@Component({
  selector: 'app-code',
  template: `
    <div class="viewContainer" [ngClass]="theme ? 'light' : 'dark'">
      <div class="contextIntro">
      <h1>CONTENT</h1>
      </div>
    </div>
  `,
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {
  themeSub: Subscription;
  langSub: Subscription;
  theme: boolean;
  constructor(
    private themeSvc: ThemeSelectService,
    private langSvc: LanguageService
  ) {}

  ngOnInit() {
    this.themeSub = this.themeSvc
      .getTheme()
      .subscribe(theme => (this.theme = theme));
    this.langSub = this.langSvc.getLang().subscribe(language => {
      // this.viewContent = this.langSvc.langSwitchHandler(
      //   language,
      //   this.enContent,
      //   this.dkContent,
      //   this.noContent
      // );
    });
  }
}
