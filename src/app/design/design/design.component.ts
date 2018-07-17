import { Component, OnInit } from '@angular/core';
import { Me } from '../../models/me.model';
import { Subscription } from 'rxjs';
import { MeService } from '../../services/me.service';
import { ThemeSelectService } from '../../services/theme-select.service';
import { LanguageService } from '../../services/language.service';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-design',
  template: `
    <div class="viewContainer" [ngClass]="theme ? 'light' : 'dark'">
      <div class="section contextIntro">
        <h1>CONTENT</h1>
      </div>
      <div class="section projectCardsGrid" *ngIf="gridView">
        <div class="column cardItem" *ngFor="let project of projects; let i = index">
              <app-card [cardId]="i" [imagePath]="project.designImageUrl" [title]="project.name"></app-card>
        </div>
      </div>
      <div class="section projectsList" *ngIf="!gridView">
        ListView
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
  projects: Project[];
  gridView = true;
  viewContent: {};

  constructor(
    private meSvc: MeService,
    private themeSvc: ThemeSelectService,
    private langSvc: LanguageService,
    private projectSvc: ProjectService
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
    this.projects = this.projectSvc.getDesignProjects();
  }
}
