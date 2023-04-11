import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml',
})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    // Remove any tags that are not <script>
    const html = value.replace(/<(?!\/?(script)\b)[^>]+>/gm, '');

    // Sanitize the HTML string and return it as a SafeHtml object
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
