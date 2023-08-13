import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.scss']
})
export class HeaderOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $.getScript("assets/js/menu.js");
  }

  openMenu() {
    $("#mySidenav").addClass('open-side');
  }

  closeMenu() {
    $("#mySidenav").removeClass('open-side');
  }

}
