import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextIntroComponent } from './context-intro.component';

describe('ContextIntroComponent', () => {
  let component: ContextIntroComponent;
  let fixture: ComponentFixture<ContextIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContextIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
