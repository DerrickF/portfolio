import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coding-svg',
  templateUrl: './coding-svg.component.html',
  styleUrls: ['./coding-svg.component.scss'],
})
export class CodingSvgComponent implements OnInit {
  @Input() darkmode: boolean;

  constructor() {}

  ngOnInit() {
  }

}
