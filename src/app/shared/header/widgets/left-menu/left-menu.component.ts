import { Component, OnInit } from '@angular/core';
import { MENUITEMS, Menu } from './left-menu-items';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  menuItems: Menu[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.menuItems = MENUITEMS;
  }
}
