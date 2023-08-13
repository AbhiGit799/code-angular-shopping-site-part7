import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 // Testimonial Carousel
 testimonial = [{
  image: 'assets/images/user.png',
  name: 'Vikram',
  designation: 'Designer',
  description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
}, {
  image: 'assets/images/user.png',
  name: 'Manoj',
  designation: 'Content Writer',
  description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
}, {
  image: 'assets/images/user.png',
  name: 'Madhu',
  designation: 'Lead Developer',
  description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
},
{
  image: 'assets/images/user.png',
  name: 'Vijay',
  designation: 'Content Writer',
  description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
},
{
  image: 'assets/images/user.png',
  name: 'Rahul',
  designation: 'Lead Developer',
  description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
},
{
  image: 'assets/images/user.png',
  name: 'Rana',
  designation: 'Lead Developer',
  description: 'you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.',
},];


// Teastimonial Slick slider config
testimonialSliderConfig = {
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

// Team 
team = [{
  image: 'assets/images/user.png',
  name: 'Ajeet',
  designation: 'CEO & Founder at Company'
}, {
  image: 'assets/images/user.png',
  name: 'Sanjay',
  designation: 'CEO & Founder at Company'
}, {
  image: 'assets/images/user.png',
  name: 'Madhu',
  designation: 'Designer & Content Writer'
}, {
  image: 'assets/images/user.png',
  name: 'Priyanshu',
  designation: 'Lead Developer'
},
{
  image: 'assets/images/user.png',
  name: 'Madhav',
  designation: 'Designer & Content Writer'
},
{
  image: 'assets/images/user.png',
  name: 'Priynaka',
  designation: 'Lead Developer'
},
{
  image: 'assets/images/user.png',
  name: 'Pankaj',
  designation: 'Lead Developer'
}];

// Team Slick slider config
teamSliderConfig = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 586,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
};




}
