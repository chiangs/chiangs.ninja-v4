import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Me } from '../../models/me.model';
import { MeService } from '../../services/me.service';
import { ThemeSelectService } from '../../services/theme-select.service';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-footer',
  template: `
    <button (click)="scrollToHeader('header')">Scroll</button>
    <ul>
      <li>{{ me.firstName }} {{ me.middleName }}. {{ me.lastName }}</li>
      <li>{{ me.email }}</li>
      <li>{{ me.location }}</li>
      <li>{{ me.languages }}</li>
      <li>{{ me.freelanceStatus }}</li>
      <li>{{ me.beliefs }}</li>
      <li>{{ me.goals }}</li>
      <li>{{ me.story }}</li>
    </ul>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  me: Me;
  themeSub: Subscription;
  theme: boolean;

  constructor(
    private meSvc: MeService,
    private themeSvc: ThemeSelectService,
    private scrollSvc: ScrollService
  ) {
    this.me = this.meSvc.getMe();
    this.themeSub = this.themeSvc
      .getTheme()
      .subscribe(theme => (this.theme = theme));
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.themeSub) {
      this.themeSub.unsubscribe();
    }
  }

  scrollToHeader(className: string): void {
    this.scrollSvc.scrollTo(className);
  }
}
