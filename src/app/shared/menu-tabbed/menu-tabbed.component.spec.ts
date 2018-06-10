import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTabbedComponent } from './menu-tabbed.component';

describe('MenuTabbedComponent', () => {
  let component: MenuTabbedComponent;
  let fixture: ComponentFixture<MenuTabbedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTabbedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTabbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
