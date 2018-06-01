import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContextModel } from '../models/context.model';
import { Me } from '../models/me.model';
import { LanguageService } from '../services/language.service';
import { MeService } from '../services/me.service';
import { ThemeSelectService } from '../services/theme-select.service';

@Component({
  selector: 'app-create',
  template: `
  <div class="viewContainer" [ngClass]="theme ? 'light' : 'dark'">
    <div class="contextIntro">
      <app-context-intro [title]="viewContent.context.title" 
      [tagline]="viewContent.context.tagline" 
      [color]="viewContent.context.color">
      </app-context-intro>
    </div>
    <ul>
      <li>
        <a [routerLink]="['./photography']" [routerLinkActive]="'active'">Photogtaphy</a>
      </li>
      <li>
        <a [routerLink]="['./leatherwork']" [routerLinkActive]="'active'">LeatherWork</a>
      </li>
    </ul>

    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit, OnDestroy {
  me: Me;
  themeSub: Subscription;
  langSub: Subscription;
  theme: boolean;
  language: string;
  contextColor = `yellow`;
  viewContent: { context: ContextModel };
  enContent = {
    context: {
      title: `Create`,
      tagline: `I cultivate my inspiration through discovering the physical world, because that's what enhances the virtual experience...`,
      color: this.contextColor
    }
  };
  dkContent = {
    context: { title: `Skabe`, tagline: ``, color: this.contextColor }
  };

  noContent = {
    context: { title: `Skape`, tagline: ``, color: this.contextColor }
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
