import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContextModel } from '../models/context.model';
import { Me } from '../models/me.model';
import { LanguageService } from '../services/language.service';
import { MeService } from '../services/me.service';
import { ThemeSelectService } from '../services/theme-select.service';

@Component({
  selector: 'app-design',
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
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit, OnDestroy {
  me: Me;
  themeSub: Subscription;
  langSub: Subscription;
  theme: boolean;
  language: string;
  contextColor = `blue`;
  viewContent: { context: ContextModel };
  enContent = {
    context: {
      title: `Design`,
      tagline: `Although not a designer by trade, it's important to me to integrate the concepts
      and tools of this crucial process; measure twice, cut once...`,
      color: this.contextColor
    }
  };
  dkContent = {
    context: { title: `Design`, tagline: ``, color: this.contextColor }
  };

  noContent = {
    context: { title: `Design`, tagline: ``, color: this.contextColor }
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
