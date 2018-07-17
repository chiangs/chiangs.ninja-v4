import { Component, OnInit } from '@angular/core';
import { Me } from '../../models/me.model';
import { Subscription } from '../../../../node_modules/rxjs';
import { MeService } from '../../services/me.service';
import { ThemeSelectService } from '../../services/theme-select.service';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-design',
  template: `
    <div class="viewContainer" [ngClass]="theme ? 'light' : 'dark'">
      <div class="contextIntro">
      <h1>CONTENT</h1>
      <app-card [cardId]="1" [imagePath]="projPath" [title]="'Chiangs.Ninja'"></app-card>
      </div>
    </div>
  `,
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {
  me: Me;
  themeSub: Subscription;
  langSub: Subscription;
  theme: boolean;
  viewContent: {};
  projPath = `../../../assets/projects/chiangs.jpg`;

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
