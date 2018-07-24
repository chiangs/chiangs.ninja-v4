import { Component, OnInit } from '@angular/core';
import { Me } from '../../models/me.model';
import { Subscription } from 'rxjs';
import { MeService } from '../../services/me.service';
import { ThemeSelectService } from '../../services/theme-select.service';
import { LanguageService } from '../../services/language.service';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';
import { ContextModel } from '../../models/context.model';

@Component({
  selector: 'app-design',
  template: `
    <div class="viewContainer" [ngClass]="theme ? 'light' : 'dark'">
      <div class="section contextIntro">
        <app-context-intro [title]="viewContent.context.title" 
          [tagline]="viewContent.context.tagline" 
          [color]="viewContent.context.color">
        </app-context-intro>
      </div>
      <div class="section projectViewPicker">
        <app-grid-list-picker (viewSelect)="changeProjectView($event)"></app-grid-list-picker>
      </div>
      <div class="section projectCardsGrid" *ngIf="gridView">
        <app-project-grid [projects]="projects" (projEmitter)="focusProject($event)"></app-project-grid>
      </div>
      <div class="section projectsList" *ngIf="!gridView">
        <app-project-list [projects]="projects"></app-project-list>
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
  contextColor = `white`;
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
      this.viewContent = this.langSvc.langSwitchHandler(
        language,
        this.enContent,
        this.dkContent,
        this.noContent
      );
    });
    this.projects = this.projectSvc.getDesignProjects();
  }

  // Set by proj comp
  focusProject(project: Project): void {
    console.log(project);
    this.projectSvc.setFocusProject(project);
  }

  changeProjectView(event: any): void {
    this.gridView = event === `grid` ? true : false;
  }
}
