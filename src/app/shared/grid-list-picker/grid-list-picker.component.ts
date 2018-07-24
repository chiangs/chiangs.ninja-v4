import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grid-list-picker',
  template: `
    <div class="gridListPickerContainer">
      <ul>
        <li class="pickerIcon grid" (click)="onViewSelect('grid')">
          <img src="../../../assets/images/icons/icon-grid.svg" alt="grid icon">
        </li>
        <li class="pickerIcon list" (click)="onViewSelect('list')">
          <img src="../../../assets/images/icons/icon-list.svg" alt="list icon">
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./grid-list-picker.component.scss']
})
export class GridListPickerComponent implements OnInit {
  @Output() viewSelect: EventEmitter<any>;

  constructor() {
    this.viewSelect = new EventEmitter();
  }

  ngOnInit() {}

  onViewSelect(viewType: string): void {
    this.viewSelect.emit(viewType);
  }
}
