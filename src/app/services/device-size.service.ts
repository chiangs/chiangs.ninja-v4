import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceSizeService {
  width: number;
  height: number;

  constructor() {
    this.width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    this.height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
  }

  isMobileDevice(): boolean {
    const portrait = window.innerHeight > window.innerWidth ? true : false;
    return this.width <= 992 || (this.width <= 1024 && portrait === true);
  }

  isPhone(): boolean {
    return this.height <= 820 ? true : false;
  }
}
