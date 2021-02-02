import { Injectable, InjectionToken } from '@angular/core';

export const STORAGE = new InjectionToken<LocalStorageService>('Storage');

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  set(key: string, value: string): void {
    window.localStorage.setItem(key, value);
  }

  get(key: string): string {
    return window.localStorage.getItem(key);
  }

  remove(key: string): void {
    window.localStorage.removeItem(key);
  }

  clear(): void {
    window.localStorage.clear();
  }

}
