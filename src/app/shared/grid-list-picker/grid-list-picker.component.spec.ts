import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridListPickerComponent } from './grid-list-picker.component';

describe('GridListPickerComponent', () => {
  let component: GridListPickerComponent;
  let fixture: ComponentFixture<GridListPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridListPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridListPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
