import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeSelectService {
  selectedTheme: Subject<boolean> = new BehaviorSubject<boolean>(null);
  seenSnackbar: boolean;

  constructor() {
    this.seenSnackbar = false;
  }

  getTheme(): Observable<boolean> {
    return this.selectedTheme.asObservable();
  }

  setTheme(selectedTheme: boolean): void {
    this.selectedTheme.next(selectedTheme);
  }

  setSeenGuide(): void {
    this.seenSnackbar = true;
  }

  getSeenGuide(): boolean {
    return this.seenSnackbar;
  }
}
