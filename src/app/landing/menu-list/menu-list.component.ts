import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter
} from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../services/language.service';
import { DeviceSizeService } from '../../services/device-size.service';

@Component({
  selector: 'app-menu-list',
  template: `
    <ul class="menuList" [ngClass]="{'phone': isPhone}">
        <li  class="linkRoloEffect" *ngFor="let link of viewContent.links; let i = index">
          <a (click)="onGoTo(i)"><span attr.data-hover="{{ link }}">{{ link }}</span></a>
        </li>
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
  isPhone: boolean;
  viewContent: { links: string[] };
  enContent = {
    links: [`design`, `code`, `create`, `write`]
  };
  dkContent = {
    links: [`design`, `kode`, `skabe`, `skrive`]
  };
  noContent = {
    links: [`design`, `kode`, `skape`, `skrive`]
  };

  constructor(
    private langSvc: LanguageService,
    private deviceSvc: DeviceSizeService
  ) {
    this.goToDesign = new EventEmitter<any>();
    this.goToCode = new EventEmitter<any>();
    this.goToCreate = new EventEmitter<any>();
    this.goToWrite = new EventEmitter<any>();
    this.isPhone = this.deviceSvc.isPhone();
  }

  ngOnInit() {
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
    if (this.langSub) {
      this.langSub.unsubscribe();
    }
  }

  onGoTo(index: number): void {
    switch (index) {
      case 0:
        this.goToDesign.emit();
        break;
      case 1:
        this.goToCode.emit();
        break;
      case 2:
        this.goToCreate.emit();
        break;
      case 3:
        this.goToWrite.emit();
        break;
      default:
        return;
    }
  }
}
