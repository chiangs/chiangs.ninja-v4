import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeSelectService {
  selectedTheme: Subject<boolean> = new BehaviorSubject<boolean>(null);
  viewedGuide = false;
  theme: boolean;
  snackBarViewedCache = 'snackBarViewed';
  selectedThemeCache = 'selectedTheme';
  hasLocalStorage: boolean;

  constructor(private router: Router) {
    this.hasLocalStorage = localStorage ? true : false;
    this.theme =
      localStorage && localStorage.getItem(this.selectedThemeCache)
        ? JSON.parse(localStorage.getItem(this.selectedThemeCache))
        : null;
    if (this.theme !== null) {
      this.selectedTheme.next(this.theme);
    }
  }

  getTheme(): Observable<boolean> {
    return this.selectedTheme.asObservable();
  }

  setTheme(selectedTheme: boolean): void {
    if (this.hasLocalStorage) {
      localStorage.setItem(
        this.selectedThemeCache,
        JSON.stringify(selectedTheme)
      );
    }
    this.selectedTheme.next(selectedTheme);
  }

  // TODO: track each page and continue the tour
  setSeenGuide(): void {
    localStorage
      ? localStorage.setItem(this.snackBarViewedCache, JSON.stringify(true))
      : (this.viewedGuide = true);
  }

  getSeenGuide(): boolean {
    return localStorage
      ? JSON.parse(localStorage.getItem(this.snackBarViewedCache))
      : this.viewedGuide;
  }

  resetGuide(): void {
    localStorage
      ? localStorage.removeItem(this.snackBarViewedCache)
      : (this.viewedGuide = false);
    this.router.navigate(['/']);
  }
}
