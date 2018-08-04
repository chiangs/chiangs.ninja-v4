import { Injectable } from '@angular/core';
import { GalleryImage } from '../models/gallery-image.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  gallery: GalleryImage[];

  constructor() {
    this.gallery = [
      {
        path: '../../assets/photography/bear-big.jpeg',
        description: 'Wooden bear',
        class: 'big'
      },
      {
        path: '../../assets/photography/berlin-wide.jpeg',
        description: 'berlin girl portrait',
        class: 'wide'
      },
      {
        path: '../../assets/photography/berlin.jpeg',
        description: 'nazi sticker',
        class: ''
      },
      {
        path: '../../assets/photography/forest-tall.jpeg',
        description: 'forest wanderer',
        class: 'tall'
      },
      {
        path: '../../assets/photography/lego-wide.jpeg',
        description: 'lego family',
        class: 'wide'
      },
      {
        path: '../../assets/photography/lk-train.jpeg',
        description: 'man on sri lankan train',
        class: ''
      },
      {
        path: '../../assets/photography/moab-wide.jpeg',
        description: 'moab railroad',
        class: 'wide'
      },
      {
        path: '../../assets/photography/gc-tall.jpeg',
        description: 'grand canyon',
        class: 'tall'
      },
      {
        path: '../../assets/photography/fy-big.jpeg',
        description: 'fy',
        class: 'big'
      },
      {
        path: '../../assets/photography/moab-wide2.jpeg',
        description: 'moab sunset',
        class: 'wide'
      },
      {
        path: '../../assets/photography/nm-wide.jpeg',
        description: 'new mexico wall',
        class: 'wide'
      },
      {
        path: '../../assets/photography/nm-wide-2.jpeg',
        description: 'new mexico tunnel',
        class: 'wide'
      },
      {
        path: '../../assets/photography/norway.jpeg',
        description: 'utstein kloster',
        class: ''
      },
      {
        path: '../../assets/photography/lk-train-tall.jpeg',
        description: 'girl on sri lankan train',
        class: 'tall'
      },
      {
        path: '../../assets/photography/norway-wide.jpeg',
        description: 'norwegian bride',
        class: 'wide'
      },
      {
        path: '../../assets/photography/aarhus-canal.jpeg',
        description: 'bike and canal in aarhus',
        class: ''
      },
      {
        path: '../../assets/photography/sicily-big.jpeg',
        description: 'boy in sicily',
        class: 'big'
      },
      {
        path: '../../assets/photography/lk-tall.jpeg',
        description: 'girl in kandy',
        class: 'tall'
      },
      {
        path: '../../assets/photography/lk-train-2.jpeg',
        description: 'sunset sri lankan train',
        class: 'wide'
      },
      {
        path: '../../assets/photography/prague-wide.jpeg',
        description: 'prague street',
        class: 'wide'
      },
      {
        path: '../../assets/photography/wine-tall.jpeg',
        description: 'bolt wine rack',
        class: 'tall'
      }
    ];
  }

  getGallery(): GalleryImage[] {
    return this.gallery;
  }
}
