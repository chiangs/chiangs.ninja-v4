import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { en, no, dk } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  _currentLang: Subject<string>;
  hasLocalStorage: boolean;
  selectedLangCache = 'language';

  constructor() {
    this.hasLocalStorage = localStorage ? true : false;
    this._currentLang = navigator.language
      ? new BehaviorSubject<string>(navigator.language)
      : new BehaviorSubject<string>(en);
  }

  getLang(): Observable<string> {
    return this._currentLang.asObservable();
  }

  setLang(language: string): void {
    if (this.hasLocalStorage) {
      localStorage.setItem(this.selectedLangCache, language);
    }
    this._currentLang.next(language);
  }

  langSwitchHandler(
    language: string,
    enContent: any,
    dkContent: any,
    noContent: any
  ): any {
    let result;
    switch (language) {
      case en:
        result = enContent;
        break;
      case dk:
        result = dkContent;
        break;
      case no:
        result = noContent;
        break;
      default:
        result = enContent;
        break;
    }
    return result;
  }
}
