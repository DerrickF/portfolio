import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'trustHtml',
})
export class TrustHtml implements PipeTransform {
    constructor(private domSanitizer: DomSanitizer) { }
    transform(html) {
    return this.domSanitizer.bypassSecurityTrustHtml(html);
    }
}