import { Component, OnInit, HostListener } from "@angular/core";
import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
} from "angular-animations";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"],
  animations: [
    fadeInOnEnterAnimation({ duration: 200 }),
    fadeOutOnLeaveAnimation({ duration: 300 }),
  ],
})
export class FooterComponent implements OnInit {
  public pageOffset: number = 0;
  constructor() {}
  @HostListener("window:scroll", ["$event"])
  setOffset(event) {
    this.pageOffset = window.pageYOffset;
  }
  backToTop() {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - window.innerHeight * 0.05); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }

  ngOnInit(): void {}
}
