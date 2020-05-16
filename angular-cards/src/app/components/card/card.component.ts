import { Component, OnInit, Input, Pipe, PipeTransform } from "@angular/core";
import { Card } from "../../models/Card";
import { ViewChild } from "@angular/core";
import { CardsService } from "../../services/cards.service";
import { DomSanitizer } from '@angular/platform-browser';
import  { parse, HtmlGenerator } from 'latex.js/dist/latex.js';

@Pipe({ name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform  {
  constructor(private sanitized: DomSanitizer) {}
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}
@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @ViewChild("test", { static: true }) content;
  styleAppend = `<link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/latex.js@0.12.1/dist/css/katex.css"><link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/latex.js@0.12.1/dist/css/article.css"><script src="https://cdn.jsdelivr.net/npm/latex.js@0.12.1/dist/dist/js/base.js"></script>`
  parsed: any = []

constructor(private cs: CardsService) {}
  public isCollapsed = true;
  ngOnInit(): void {
    this.cs.getActiveCardIndex().subscribe((change) => {
      //hides te card content when carousel slides
      this.content.hide();
    });
    if(this.card.latex != 0){
    this.parse(this.card.content)}
    else{
      this.parsed.push(this.card.content)
    }
  }

  parse(cardContent: any){
  var latex = cardContent
  let generator = new HtmlGenerator({ hyphenate: false })
  let doc = parse(latex, { generator: generator }).htmlDocument()
  latex = this.styleAppend + doc.body.innerHTML
  this.parsed.push(latex)
  }
}
