import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-create-nav',
  template: `
  <div class="createMenu">
    <div class="createMenuItem leftMenu">
      <a [routerLink]="['./leatherwork']" [routerLinkActive]="'active'">{{ viewContent.leftMenuText }}</a>
    </div>

    <div class="createMenuItem rightMenu">
      <a [routerLink]="['./photography']" [routerLinkActive]="'active'">{{ viewContent.rightMenuText }}</a>
    </div>
  </div>
  `,
  styleUrls: ['./create-nav.component.scss']
})
export class CreateNavComponent implements OnInit, OnDestroy {
  langSub: Subscription;
  language: string;
  viewContent: { leftMenuText: string; rightMenuText: string };
  enContent = { leftMenuText: `LeatherWork`, rightMenuText: `Photography` };
  dkContent = {
    leftMenuText: `Læder Håndværk`,
    rightMenuText: `Fotografering`
  };
  noContent = { leftMenuText: `Lærhåndverk`, rightMenuText: `Fotografering` };

  constructor(private langSvc: LanguageService) {}

  ngOnInit() {
    this.langSub = this.langSvc.getLang().subscribe(language => {
      this.language = language;
      this.viewContent = this.langSvc.langSwitchHandler(
        this.language,
        this.enContent,
        this.dkContent,
        this.noContent
      );
    });
  }

  ngOnDestroy(): void {
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }
}
