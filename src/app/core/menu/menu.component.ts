import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
  animations: [
    trigger('state', [
      state('show', style({
        transform: 'translateX(0)'
      })),
      state('hide', style({
        transform: 'translateX(0%)'
      })),
    ])
  ]
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  state = 'show';

  toggleState() {
    this.state = this.state === 'show' ? 'hide' : 'show';
  }

}
