import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContextModel } from '../models/context.model';
import { Me } from '../models/me.model';
import { LanguageService } from '../services/language.service';
import { MeService } from '../services/me.service';
import { ThemeSelectService } from '../services/theme-select.service';

@Component({
  selector: 'app-code',
  template: `
    <div class="viewContainer" [ngClass]="theme ? 'light' : 'dark'">
    <div class="contextIntro">
      <app-context-intro [title]="viewContent.context.title" 
      [tagline]="viewContent.context.tagline" 
      [color]="viewContent.context.color">
      </app-context-intro>
    </div>
  </div>
  `,
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit, OnDestroy {
  me: Me;
  themeSub: Subscription;
  langSub: Subscription;
  theme: boolean;
  language: string;
  contextColor = `green`;
  // Language Content
  viewContent: { context: ContextModel };
  enContent = {
    context: {
      title: `Code`,
      tagline: `In the pursuit of being a world-class developer, I continue to build and stretch my learning...`,
      color: this.contextColor
    }
  };

  dkContent = {
    context: { title: `Kode`, tagline: ``, color: this.contextColor }
  };

  noContent = {
    context: { title: `Kode`, tagline: ``, color: this.contextColor }
  };

  constructor(
    private meSvc: MeService,
    private themeSvc: ThemeSelectService,
    private langSvc: LanguageService
  ) {
    this.me = this.meSvc.getMe();
  }

  ngOnInit() {
    this.themeSub = this.themeSvc
      .getTheme()
      .subscribe(theme => (this.theme = theme));
    this.langSub = this.langSvc.getLang().subscribe(langauge => {
      this.language = langauge;
      this.viewContent = this.langSvc.langSwitchHandler(
        this.language,
        this.enContent,
        this.dkContent,
        this.noContent
      );
    });
  }

  ngOnDestroy(): void {
    if (this.themeSub) {
      this.themeSub.unsubscribe();
    }
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }
}
