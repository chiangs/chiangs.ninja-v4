import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Project } from './models/project.model';
import { en } from './constants';
import { DeviceSizeService } from './services/device-size.service';
import { LanguageService } from './services/language.service';
import { ProjectService } from './services/project.service';

@Component({
  selector: 'app-root',
  template: `
  <div class="app" [ngClass]="{'overlay': isProjFocused}">
      <app-navbar class="header" *ngIf="!isLanding && !isPhone"></app-navbar>
      <app-navbar-mobile class="header" *ngIf="!isLanding && isPhone"></app-navbar-mobile>
      <div class="masterContainer">
        <router-outlet></router-outlet>
      </div>
      <app-footer class="footer" *ngIf="!isLanding"></app-footer>
  </div>
  <div class="modalContainer" [ngClass]="{'show': selectedProject}">
    <app-modal [project]="selectedProject" (modalNavAction)="onModalAction($event)" *ngIf="selectedProject"></app-modal>
  </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  langSub: Subscription;
  projSub: Subscription;
  selectedProject: Project;
  isProjFocused: boolean;
  isLanding: boolean;
  title = `Chiangs.Ninja`;
  defaultLang = en;
  isPhone = false;
  constructor(
    private router: Router,
    private langSvc: LanguageService,
    private deviceSvc: DeviceSizeService,
    private projSvc: ProjectService
  ) {
    this.setLanguage();
  }

  ngOnInit() {
    this.isPhone = this.deviceSvc.isPhone();
    this.router.events.subscribe(
      res =>
        (this.isLanding =
          this.router.url.includes('design') ||
          this.router.url.includes('code') ||
          this.router.url.includes('create')
            ? false
            : true)
    );
    this.projSub = this.projSvc.getFocusProject().subscribe(project => {
      this.selectedProject = project.name === `temp` ? null : project;
      this.isProjFocused = project.name === `temp` ? false : true;
    });
  }

  setLanguage(): void {
    if (localStorage.getItem('language')) {
      this.langSvc.setLang(localStorage.getItem('language'));
    } else {
      navigator.language
        ? this.langSvc.setLang(navigator.language)
        : this.langSvc.setLang(this.defaultLang);
    }
  }

  onModalAction(event: any): void {
    if (event === `close`) {
      this.projSvc.setFocusProject(null);
    }
  }
}
