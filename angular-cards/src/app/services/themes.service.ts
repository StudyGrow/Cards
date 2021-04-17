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
    if (isDevMode()) console.log(theme, current);
    if (current === Theme[theme]) return;
    let newTheme: Theme = Theme[theme];
    if (newTheme === null) {
      console.error('Theme string not matching any enum');
      return;
    }
    this.renderer.removeClass(document.body, Theme[current]); //remove the current theme
    localStorage.setItem('theme', Theme[newTheme]); //update cache
    this.currTheme.next(newTheme);

    if (theme === 'default') {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark-theme' : 'light-theme'; //check if browser set dark mode preference
      newTheme = Theme[theme];
    }

    this.renderer.addClass(document.body, Theme[newTheme]); //only need to add the dark-theme

    return theme;
  }

  /**
   * returns an observable of the theme which is currently set the theme is returned as string
   */
  get currentTheme(): Observable<string> {
    return this.currTheme.asObservable().pipe(
      map((theme: Theme) => Theme[theme]),
      map((theme: string) => {
        if (theme === 'default') {
          return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark-theme' : 'light-theme';
        }
        return theme;
      })
    );
  }

  /**
   * Initialize the theme. The function will first check if a theme is cached. If no theme is cached it will check if the browser has set a
   * preference.
   */
  initTheme() {
    let initialTheme = localStorage.getItem('theme');
    if (!initialTheme) {
      initialTheme = 'default';
    }
    this.changeTheme(initialTheme);
  }
}
