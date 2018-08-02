import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Me } from '../../models/me.model';
import { GalleryImage } from '../../models/gallery-image.model';
import { GalleryService } from '../../services/gallery.service';
import { ThemeSelectService } from '../../services/theme-select.service';

@Component({
  selector: 'app-photography',
  template: `
  <div class="header-grid" [ngClass]="theme ? 'light' : 'dark'">
    <div class="titles">
      <h1>{{ title }}</h1>
      <h2>{{ title2 }}</h2>
    </div>
  </div>
  <app-gallery [gallery]="gallery"></app-gallery>
  `,
  styleUrls: ['./photography.component.scss']
})
export class PhotographyComponent implements OnInit, OnDestroy {
  themeSub: Subscription;
  theme: boolean;
  me: Me;
  title: string;
  title2: string;
  update: string;
  cta: string;
  ctaTech: string;
  cta2: string;
  gallery: GalleryImage[];

  constructor(
    private themeSvc: ThemeSelectService,
    private gallerySvc: GalleryService
  ) {
    this.title = `A way to find inspiration and lessons in design.`;
    this.title2 = `A creative outlet to develop observational and detail-oriented aspects of problem-solving skills.`;
    this.cta = `This gallery is built with`;
    this.themeSub = this.themeSvc
      .getTheme()
      .subscribe(theme => (this.theme = theme));
  }

  ngOnInit() {
    this.gallery = this.initGallery();
  }

  ngOnDestroy() {
    if (this.themeSub) {
      this.themeSub.unsubscribe();
    }
  }

  initGallery(): GalleryImage[] {
    return this.gallerySvc.getGallery();
  }
}
