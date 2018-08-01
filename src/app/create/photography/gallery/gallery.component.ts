import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { GalleryImage } from '../../../models/gallery-image.model';
import { ThemeSelectService } from '../../../services/theme-select.service';

@Component({
  selector: 'app-gallery',
  template: `
  <div class="container image-grid" [ngClass]="theme ? 'light' : 'dark'">
    <div *ngFor="let photo of gallery" [class]="photo.class">
      <img [src]="photo.path" [alt]="photo.description">
    </div>
  </div>
  `,
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy {
  @Input() gallery: GalleryImage[];
  themeSub: Subscription;
  theme: boolean;

  constructor(private themeSvc: ThemeSelectService) {
    this.themeSub = this.themeSvc
      .getTheme()
      .subscribe(theme => (this.theme = theme));
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.themeSub.unsubscribe();
  }
}
