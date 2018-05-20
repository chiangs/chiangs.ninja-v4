import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingTaglineComponent } from './landing-tagline.component';

describe('LandingTaglineComponent', () => {
  let component: LandingTaglineComponent;
  let fixture: ComponentFixture<LandingTaglineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingTaglineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingTaglineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
