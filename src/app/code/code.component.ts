import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Me } from '../models/me.model';
import { MeService } from '../services/me.service';
import { ThemeSelectService } from '../services/theme-select.service';

@Component({
  selector: 'app-code',
  template: `
    <div class="viewContainer" [ngClass]="theme ? 'light' : 'dark'">
    <div class="contextIntro">
      <app-context-intro [title]="me.codeContext.title" 
      [tagline]="me.codeContext.tagline" 
      [color]="me.codeContext.color">
      </app-context-intro>
    </div>
  </div>
  `,
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit, OnDestroy {
  me: Me;
  themeSub: Subscription;
  theme: boolean;

  constructor(private meSvc: MeService, private themeSvc: ThemeSelectService) {
    this.me = this.meSvc.getMe();
    this.themeSub = this.themeSvc
      .getTheme()
      .subscribe(theme => (this.theme = theme));
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    if (this.themeSub) {
      this.themeSub.unsubscribe();
    }
  }
}
