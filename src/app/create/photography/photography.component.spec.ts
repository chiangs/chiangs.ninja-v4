import { NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotographyComponent } from './photography.component';
import { GalleryImage } from '../../models/gallery-image.model';

@Component({ selector: 'app-photography', template: '' })
class PhotographyStubComponent {}

describe('PhotographyComponent', () => {
  let component: PhotographyComponent;
  let fixture: ComponentFixture<PhotographyComponent>;

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
  // ngOnInit
  describe('unit tests', () => {
    describe('ngOninit', () => {
      it('should set gallery by calling initGallery', () => {
        component.ngOnInit();
        expect(component.initGallery).toHaveBeenCalled();
      });
    });

    describe('initGallery', () => {
      it('should return array of gallery images ');
    });

    describe('ngOnDestroy', () => {});
    it('should unsubscribe from theme subscription', () => {});
  });

  describe('template integration tests', () => {
    describe('constructor', () => {
      it('should set title correctly', () => {});
      it('should subscribe to theme service and set theme', () => {});
    });
  });
  // integration - template
});
