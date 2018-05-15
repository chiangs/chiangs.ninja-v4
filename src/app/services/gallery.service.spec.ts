import { TestBed, inject } from '@angular/core/testing';
import { GalleryService } from './gallery.service';

describe('GalleryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GalleryService]
    });
    const service = new GalleryService();
  });

  it(
    'should be created',
    inject([GalleryService], (service: GalleryService) => {
      expect(service).toBeTruthy();
    })
  );

  it(
    'should return array of images',
    inject([GalleryService], (service: GalleryService) => {
      expect(service.getGallery()).toBe(service.gallery);
    })
  );
});
