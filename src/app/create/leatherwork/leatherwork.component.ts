import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-leatherwork',
  template: `
    <p>
      {{ viewContent.message }}
    </p>
  `,
  styleUrls: ['./leatherwork.component.scss']
})
export class LeatherworkComponent implements OnInit, OnDestroy {
  langSub: Subscription;
  language: string;
  viewContent: { message: string };
  enContent = { message: `Nothing to showcase yet, check back later, thanks!` };
  dkContent = { message: `Intent at fremvise i øjeblikket` };
  noContent = { message: `Ingenting å vise frem for øyeblikket` };

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
