import { NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotographyComponent } from './photography.component';
import { GalleryImage } from '../../models/gallery-image.model';

@Component({ selector: 'app-photography', template: '' })
class PhotographyStubComponent {}

describe('PhotographyComponent', () => {
  let component: PhotographyComponent;
  let fixture: ComponentFixture<PhotographyComponent>;
  let h1: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PhotographyComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographyComponent);
    component = fixture.componentInstance;
    spyOn(component, 'initGallery');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // unit tests - each function
  describe('unit tests', () => {
    describe('ngOninit', () => {
      it('should set gallery by calling initGallery', () => {
        component.ngOnInit();
        expect(component.initGallery).toHaveBeenCalled();
      });
    });

    describe('ngOnDestroy', () => {});
    it('should unsubscribe from theme subscription', () => {});
  });

  // integration - template
  describe('template integration tests', () => {
    describe('constructor', () => {
      it('should set title correctly', () => {
        h1 = fixture.nativeElement.querySelector('h1');
        expect(h1.textContent).toContain(component.title);
      });
      it('should subscribe to theme service and set theme', () => {});
    });
  });
});
