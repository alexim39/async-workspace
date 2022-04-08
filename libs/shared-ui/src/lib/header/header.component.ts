import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'async-header',
  template: `
    <div class="topnav" fxLayout="row" fxLayoutAlign="space-between">
      Library Header
    </div>
  `,
  styles: [`
    .topnav {
      background-color: rgb(94, 94, 255);
      overflow: hidden;
      width: 100%;
    }
  `],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
