import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter
} from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-menu-list',
  template: `
    <ul class="menuList">
        <li><button mat-button color="accent" class="ctaButton" (click)="onGoToDesign()">{{ viewContent.menu1 }}</button></li>
        <li><button mat-button color="accent" class="ctaButton" (click)="onGoToCode()">{{ viewContent.menu2 }}</button></li>
        <li><button mat-button color="accent" class="ctaButton" (click)="onGoToCreate()">{{ viewContent.menu3 }}</button></li>
        <li><button mat-button color="accent" class="ctaButton" (click)="onGoToWrite()" rel="noopener">{{ viewContent.menu4 }}</button></li>
    </ul>
  `,
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit, OnDestroy {
  @Output() goToDesign: EventEmitter<any>;
  @Output() goToCode: EventEmitter<any>;
  @Output() goToCreate: EventEmitter<any>;
  @Output() goToWrite: EventEmitter<any>;
  langSub: Subscription;
  language: string;
  viewContent: { menu1: string; menu2: string; menu3: string; menu4: string };
  enContent = {
    menu1: `design`,
    menu2: `code`,
    menu3: `create`,
    menu4: `write`
  };
  dkContent = {
    menu1: `design`,
    menu2: `kode`,
    menu3: `skabe`,
    menu4: `skrive`
  };
  noContent = {
    menu1: `design`,
    menu2: `kode`,
    menu3: `skape`,
    menu4: `skrive`
  };

  constructor(private langSvc: LanguageService) {
    this.goToDesign = new EventEmitter<any>();
    this.goToCode = new EventEmitter<any>();
    this.goToCreate = new EventEmitter<any>();
    this.goToWrite = new EventEmitter<any>();
  }

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

  onGoToDesign(): void {
    this.goToDesign.emit();
  }
  onGoToCode(): void {
    this.goToCode.emit();
  }
  onGoToCreate(): void {
    this.goToCreate.emit();
  }
  onGoToWrite(): void {
    this.goToWrite.emit();
  }
}
