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

  constructor( private rendererFactory: RendererFactory2) {
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

  changeTheme(theme?: string) {
    if (this.currTheme.getValue() === Theme[theme]) return;
    let newTheme: Theme = Theme[theme];
    if (newTheme === null) {
      newTheme = this.currTheme.getValue();
      // if (!newTheme) return;
    }

    this.renderer.removeClass(document.body, Theme[this.currTheme.getValue()]); //remove the old theme
    this.renderer.addClass(document.body, Theme[newTheme]); //add the new theme
    localStorage.setItem('theme', Theme[newTheme]); //update cache

    this.currTheme.next(newTheme); //update variable
  }
  get currentTheme(): Observable<string> {
    return this.currTheme.asObservable().pipe(map((theme:Theme)=>Theme[theme]));
  }

  initTheme() {
    let cachedTheme = localStorage.getItem('theme');

    if (cachedTheme) {
      this.changeTheme(cachedTheme);
    } else {
      let matched = window.matchMedia('(prefers-color-scheme: dark)').matches; //check if browser set dark mode preference
      this.changeTheme(matched ? 'dark-theme' : 'default');
    }
  }
}
