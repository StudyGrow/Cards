import { Injectable, Renderer2, RendererFactory2 } from "@angular/core";
import { Store } from "@ngrx/store";
import { changeTheme } from "../store/actions/actions";

@Injectable({
  providedIn: "root",
})
export class ThemesService {
  private renderer: Renderer2;
  constructor(private store: Store, private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  currTheme: string = localStorage.getItem("theme");

  changeTheme(theme?: string) {
    if (theme === this.currTheme) return;
    let t = theme;
    if (!t) {
      t = this.currTheme;
      if (!t) return;
    }

    this.renderer.removeClass(document.body, this.currTheme); //remove the old theme
    if (t !== "default") {
      //no need to change body class to default
      this.renderer.addClass(document.body, t); //add the new theme
    }

    localStorage.setItem("theme", t); //update cache
    this.store.dispatch(changeTheme({ theme: t })); //change state

    this.currTheme = t; //update variable
  }

  initTheme() {
    this.changeTheme();
  }
}
