import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Me } from '../models/me.model';
import { MeService } from '../services/me.service';
import { ThemeSelectService } from '../services/theme-select.service';
import { DeviceSizeService } from '../services/device-size.service';

@Component({
  selector: 'app-design',
  template: `
    <div class="viewContainer" [ngClass]="theme ? 'light' : 'dark'">
    <div class="contextIntro">
      <app-context-intro [title]="me.designContext.title" 
      [tagline]="me.designContext.tagline" 
      [color]="me.designContext.color">
      </app-context-intro>
    </div>
  </div>
  `,
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit, OnDestroy {
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
