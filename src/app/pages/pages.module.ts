import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BarRatingModule } from 'ngx-bar-rating';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AboutUsComponent,
    ContactUsComponent,
    ErrorPageComponent,
    FaqComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    BarRatingModule,
    InfiniteScrollModule,
    SlickCarouselModule,
    HttpClientModule,
  ]
})
export class PagesModule { }
