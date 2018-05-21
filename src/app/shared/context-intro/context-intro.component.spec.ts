import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextIntroComponent } from './context-intro.component';

describe('ContextIntroComponent', () => {
  let component: ContextIntroComponent;
  let fixture: ComponentFixture<ContextIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContextIntroComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextIntroComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('unit tests', () => {
    describe('ngOninit', () => {
      it('should have default text if none passed in', () => {
        expect(component.title).toEqual('default title');
      });
      it('should have defailt tagline if none passed in', () => {
        expect(component.tagline).toEqual('default tagline');
      });
      it('should have default color if none passed in', () => {
        expect(component.color).toEqual('blue');
      });
    });
  });

  describe('template integration tests', () => {
    it('should set contextTitle text', () => {
      component.title = 'Design';
      fixture.detectChanges();
      const h2 = fixture.nativeElement.querySelector('h2');
      expect(h2.textContent).toContain(component.title);
    });
  });
});
