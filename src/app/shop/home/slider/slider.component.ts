import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {


  SliderConfig = {
    autoPlay: true,
    autoplaySpeed: 3000
  };

  constructor() { }

  ngOnInit(): void {
  }


}
