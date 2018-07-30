import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeSelectService } from '../../services/theme-select.service';

@Component({
  selector: 'app-grid-list-picker',
  template: `
    <div class="gridListPickerContainer">
      <ul>
        <li class="pickerIcon list" (click)="onViewSelect('list')">
          <img src="{{ theme ? listIconLt : listIconDk }}" alt="list icon">
        </li>
        <li class="pickerIcon grid" (click)="onViewSelect('grid')">
          <img src="{{ theme ? gridIconLt : gridIcontDk }}" alt="grid icon">
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./grid-list-picker.component.scss']
})
export class GridListPickerComponent implements OnInit, OnDestroy {
  @Output() viewSelect: EventEmitter<any>;
  themeSub: Subscription;
  theme: boolean;
  listIconLt = '../../../assets/images/icons/icon-list-blk.svg';
  listIconDk = '../../../assets/images/icons/icon-list.svg';
  gridIconLt = '../../../assets/images/icons/icon-grid-blk.svg';
  gridIcontDk = '../../../assets/images/icons/icon-grid.svg';

  constructor(private themeSvc: ThemeSelectService) {
    this.viewSelect = new EventEmitter();
    this.themeSub = this.themeSvc
      .getTheme()
      .subscribe(theme => (this.theme = theme));
  }

  ngOnInit() {
    !this.theme ? (this.theme = false) : (this.theme = this.theme);
  }

  ngOnDestroy() {
    if (this.themeSub) {
      this.themeSub.unsubscribe();
    }
  }

  onViewSelect(viewType: string): void {
    this.viewSelect.emit(viewType);
  }
}
