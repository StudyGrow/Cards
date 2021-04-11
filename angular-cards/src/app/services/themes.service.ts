import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Theme } from '../models/Themes';
import { changeTheme } from '../store/actions/StateActions';

@Injectable({
  providedIn: 'root',
})
export class ThemesService {
  private renderer: Renderer2;
  private currTheme: BehaviorSubject<Theme>;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    let initTheme = localStorage.getItem('theme');
    switch (initTheme) {
      case 'dark-theme': {
        this.currTheme = new BehaviorSubject(Theme['dark-theme']);
      }
      default: {
        this.currTheme = new BehaviorSubject(Theme['default']);
      }
    }
  }
  /**
   * Changes the current theme of the application, by adding the respective theme class to the body of the document
   * @param theme the theme which should be set. (Use the string respresentation of Theme enum)
   * @param cacheTheme wether to save the new theme in localstorage
   * @returns the newly set theme or undefined if the theme is already set
   */
  changeTheme(theme?: string, cacheTheme?: boolean) {
    if (this.currTheme.getValue() === Theme[theme]) return;
    let newTheme: Theme = Theme[theme];
    if (newTheme === null) {
      newTheme = this.currTheme.getValue();
      // if (!newTheme) return;
    }

    this.renderer.removeClass(document.body, Theme[this.currTheme.getValue()]); //remove the old theme
    this.renderer.addClass(document.body, Theme[newTheme]); //add the new theme
    if (cacheTheme) localStorage.setItem('theme', Theme[newTheme]); //update cache

    this.currTheme.next(newTheme);
    return theme;
  }

  /**
   * returns an observable of the theme which is currently set
   */
  get currentTheme(): Observable<string> {
    return this.currTheme.asObservable().pipe(map((theme: Theme) => Theme[theme]));
  }

  /**
   * Initialize the theme. The function will first check if a theme is cached. If no theme is cached it will check if the browser has set a
   * preference.
   */
  initTheme() {
    let cachedTheme = localStorage.getItem('theme');

    if (cachedTheme) {
      this.changeTheme(cachedTheme, false);
    } else {
      let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark-theme' : 'default'; //check if browser set dark mode preference
      this.changeTheme(theme, false);
    }
  }
}
