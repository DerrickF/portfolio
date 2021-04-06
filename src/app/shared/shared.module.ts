import { NgModule } from '@angular/core';
import { TrustHtml } from './pipes/trust-html.pipe';

@NgModule({
  imports: [],
  declarations: [
    TrustHtml
  ],
  exports: [
    TrustHtml
  ]
})
export class SharedModule {}