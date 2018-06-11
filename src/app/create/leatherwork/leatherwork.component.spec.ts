import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeatherworkComponent } from './leatherwork.component';

describe('LeatherworkComponent', () => {
  let component: LeatherworkComponent;
  let fixture: ComponentFixture<LeatherworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeatherworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeatherworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
