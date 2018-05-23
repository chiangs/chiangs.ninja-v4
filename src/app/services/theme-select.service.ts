import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeSelectService {
  selectedTheme: Subject<boolean> = new BehaviorSubject<boolean>(null);
  viewedGuide = false;
  snackBarViewedCache = 'snackBarViewed';

  constructor(private router: Router) {}

  getTheme(): Observable<boolean> {
    return this.selectedTheme.asObservable();
  }

  setTheme(selectedTheme: boolean): void {
    this.selectedTheme.next(selectedTheme);
  }

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
