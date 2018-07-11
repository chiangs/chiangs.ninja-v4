import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DeviceSizeService } from '../../services/device-size.service';
import { LanguageService } from '../../services/language.service';
import { ScrollService } from '../../services/scroll.service';
import { ThemeSelectService } from '../../services/theme-select.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  themeSub: Subscription;
  langSub: Subscription;
  theme: boolean;
  checked: boolean;
  isMobilePhone: boolean;
  designUrl = `design`;
  codeUrl = `code`;
  createUrl = `create`;
  writeUrl = `https://dev.to/chiangs`;

  viewContent: {
    navLinks: { name: string; url: string }[];
    blogNavTitle: string;
  };
  enContent = {
    navLinks: [
      { name: `design`, url: this.designUrl },
      { name: `code`, url: this.codeUrl },
      { name: `create`, url: this.createUrl }
    ],
    blogNavTitle: `write`
  };
  noContent = {
    navLinks: [
      { name: `design`, url: this.designUrl },
      { name: `kode`, url: this.codeUrl },
      { name: `skabe`, url: this.createUrl }
    ],
    blogNavTitle: `skrive`
  };
  dkContent = {
    navLinks: [
      { name: `design`, url: this.designUrl },
      { name: `kode`, url: this.codeUrl },
      { name: `skape`, url: this.createUrl }
    ],
    blogNavTitle: `skrive`
  };

  constructor(
    private router: Router,
    private themeSvc: ThemeSelectService,
    private isMobileSvc: DeviceSizeService,
    private scrollSvc: ScrollService,
    private langSvc: LanguageService
  ) {}

  ngOnInit() {
    this.themeSub = this.themeSvc.getTheme().subscribe(theme => {
      this.checked = theme;
      this.theme = theme;
    });
    this.langSub = this.langSvc.getLang().subscribe(language => {
      this.viewContent = this.langSvc.langSwitchHandler(
        language,
        this.enContent,
        this.noContent,
        this.dkContent
      );
    });
  }

  ngOnDestroy() {
    if (this.themeSub) {
      this.themeSub.unsubscribe();
    }
  }

  onToggleTheme(event: any): void {
    this.themeSvc.setTheme(event.checked);
  }

  goTo(url: string): void {
    this.router.navigate([url]);
  }

  goToBlog(): void {
    window.open(this.writeUrl, '_blank', 'noopener');
  }

  scrollToFooter(className: string): void {
    this.scrollSvc.scrollTo(className);
  }
}
