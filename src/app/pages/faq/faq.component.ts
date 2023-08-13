import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cl1:any='collapse show';
  cl2:any='collapse';
  cl3:any='collapse';
  cl4:any='collapse';
  cl5:any='collapse';

  f1()
  {
   
    if(this.cl1=='collapse show')
    {
      this.cl1='collapse';
    }
    else
    {
      this.cl1='collapse show';
    }

  }

  f2()
  {
   
    if(this.cl2=='collapse')
    {
      this.cl2='collapse show';
    }
    else
    {
      this.cl2='collapse';
    }

  }

  f3()
  {
   
    if(this.cl3=='collapse')
    {
      this.cl3='collapse show';
    }
    else
    {
      this.cl3='collapse';
    }

  }

  f4()
  {
   
    if(this.cl4=='collapse')
    {
      this.cl4='collapse show';
    }
    else
    {
      this.cl4='collapse';
    }

  }

  f5()
  {
   
    if(this.cl5=='collapse')
    {
      this.cl5='collapse show';
    }
    else
    {
      this.cl5='collapse';
    }

  }



}
