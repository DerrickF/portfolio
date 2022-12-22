import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-new-component',
  imports: [CommonModule], 
  styles: [`
    h1 {
      font-size: 200px;
    }
  `],
  template: `
    <h1>NEW COMPONENT</h1>
  `

})
export class StandAloneComponent {
  constructor() {
  }
}
