import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Me } from '../../models/me.model';
import { LanguageService } from '../../services/language.service';
import { MeService } from '../../services/me.service';
import { ScrollService } from '../../services/scroll.service';
import { ThemeSelectService } from '../../services/theme-select.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  viewContent: { navToLanding: string; resetGuide: string; backToTop: string };
  enContent = {
    navToLanding: `Back to Landing`,
    resetGuide: `Reset Guided Tour`,
    backToTop: `Back to Top`
  };
  dkContent = {
    navToLanding: `Tilbage til landing`,
    resetGuide: `Genstart Guided Tour`,
    backToTop: `Tilbage til toppen`
  };
  noContent = {
    navToLanding: `Tilbake til Landing`,
    resetGuide: `Omstart Guided Tour`,
    backToTop: `Tilbake til toppen`
  };
  me: Me;
  themeSub: Subscription;
  theme: boolean;
  langSub: Subscription;
  socialLinksOrientation: string;

  constructor(
    private router: Router,
    private meSvc: MeService,
    private themeSvc: ThemeSelectService,
    private langSvc: LanguageService,
    private scrollSvc: ScrollService
  ) {
    this.me = this.meSvc.getMe();
    this.socialLinksOrientation = 'horizontal';
  }

  ngOnInit(): void {
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
  }

  ngOnDestroy(): void {
    if (this.themeSub) {
      this.themeSub.unsubscribe();
    }
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }

  goToBadge(badge: string): void {
    let externalUrl;
    switch (badge) {
      case `umbraco`:
        externalUrl = this.me.umbracoCert;
        break;
      case `devTo`:
        externalUrl = this.me.devTo;
        break;
      default:
        break;
    }
    window.open(externalUrl, '_blank', 'noopener noreferrer');
  }

  scrollToHeader(className: string): void {
    this.scrollSvc.scrollTo(className);
  }

  backToLanding(): void {
    this.router.navigate(['/']);
  }
  resetGuidedTour(): void {
    this.themeSvc.resetGuide();
  }
}
