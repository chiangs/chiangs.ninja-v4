import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryComponent } from './gallery.component';
import { GalleryImage } from '../../../models/gallery-image.model';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  let expectedGallery: GalleryImage[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    expectedGallery = [
      {
        class: 'wide',
        path: './fakePath',
        description: 'description'
      }
    ];
    component.gallery = expectedGallery;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get an array of image objects', () => {
    expect(component.gallery).toContain({
      class: 'wide',
      path: './fakePath',
      description: 'description'
    });
  });
});
