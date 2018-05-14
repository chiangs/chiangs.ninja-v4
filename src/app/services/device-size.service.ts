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
    return this.width <= 1366 ? true : false;
  }

  isMobilePhone(): boolean {
    return this.width <= 766 ? true : false;
  }

  isMobilePhonePortrait(): boolean {
    return this.width <= 670 ? true : false;
  }
}
