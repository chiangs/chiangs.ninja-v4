import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeSelectService {
  selectedTheme: Subject<boolean> = new BehaviorSubject<boolean>(null);
  snackBarViewed = 'snackBarViewed';

  constructor() {}

  getTheme(): Observable<boolean> {
    return this.selectedTheme.asObservable();
  }

  setTheme(selectedTheme: boolean): void {
    this.selectedTheme.next(selectedTheme);
  }

  setSeenGuide(): void {
    // this.seenSnackbar = true;
    localStorage.setItem(this.snackBarViewed, JSON.stringify(true));
  }

  getSeenGuide(): boolean {
    const data = localStorage.getItem(this.snackBarViewed);
    return JSON.parse(data);
  }

  resetGuide(): void {
    localStorage.removeItem(this.snackBarViewed);
  }
}
