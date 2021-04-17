import { Injectable, isDevMode, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Theme } from '../models/Themes';
@Injectable({
  providedIn: 'root',
})
export class ThemesService {
  private renderer: Renderer2;
  private currTheme: BehaviorSubject<Theme> = new BehaviorSubject(undefined);

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    // let initTheme = localStorage.getItem('theme');
    // switch (initTheme) {
    //   case 'dark-theme': {
    //     this.currTheme = new BehaviorSubject(Theme['dark-theme']);
    //   }
    //   default: {
    //     this.currTheme = new BehaviorSubject(Theme['default']);
    //   }
    // }
  }
  /**
   * Changes the current theme of the application, by adding the respective theme class to the body of the document
   * @param theme the theme which should be set. (Use the string respresentation of Theme enum)
   * @param cacheTheme wether to save the new theme in localstorage
   * @returns the newly set theme or undefined if the theme is already set
   */
  changeTheme(theme?: string) {
    const current = this.currTheme.getValue();

    if (current === Theme[theme]) return;
    let newTheme: Theme = Theme[theme]; //transform into enum
    if (newTheme === null) return console.error(theme + ' not matching any Theme enum');

    localStorage.setItem('theme', theme); //update cache
    this.currTheme.next(newTheme); //update observable

    if (theme === 'default') theme = this.getBrowserPreference();

    this.renderer.removeClass(document.body, Theme[current]); //remove the current theme
    this.renderer.addClass(document.body, theme);

    return theme;
  }

  /**
   * Returns dark/light theme based on browser preference
   */
  private getBrowserPreference() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark-theme' : 'light-theme';
  }

  /**
   * returns an observable of the theme which is currently set.
   * The theme is returned as a string
   */
  get currentTheme(): Observable<string> {
    return this.currTheme.asObservable().pipe(map((theme: Theme) => Theme[theme]));
  }

  /**
   * Initialize the theme. The function will first check if a theme is cached.
   * If no theme is cached it will use the default theme.
   */
  initTheme() {
    let initialTheme = localStorage.getItem('theme');
    if (!initialTheme) initialTheme = 'default';
    this.changeTheme(initialTheme);
  }
}
