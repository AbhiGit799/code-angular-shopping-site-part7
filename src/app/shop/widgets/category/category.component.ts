import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    $(".collapse-block-title").on('click', function (e) {
      e.preventDefault();
      //$(".collection-collapse-block-content").slideToggle();
      $(this).next(".collection-collapse-block-content").slideToggle();
    });
  }

}
