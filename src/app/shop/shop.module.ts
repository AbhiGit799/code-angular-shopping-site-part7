import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { HomeComponent } from './home/home.component';
import { CollectionBannerComponent } from './home/collection-banner/collection-banner.component';
import { LogoComponent } from './home/logo/logo.component';
import { ParallaxBannerComponent } from './home/parallax-banner/parallax-banner.component';
import { SliderComponent } from './home/slider/slider.component';
import { ProductSliderComponent } from './home/product-slider/product-slider.component';
import { ProductTabComponent } from './home/product-tab/product-tab.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CompareComponent } from './compare/compare.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SuccessComponent } from './success/success.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CollectionComponent } from './collection/collection.component';
import { NewProductComponent } from './widgets/new-product/new-product.component';
import { CategoryComponent } from './widgets/category/category.component';
import { ColorComponent } from './widgets/filter/color/color.component';
import { BrandComponent } from './widgets/filter/brand/brand.component';
import { PriceComponent } from './widgets/filter/price/price.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BarRatingModule } from 'ngx-bar-rating';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { NgxSliderModule } from '@angular-slider/ngx-slider';



@NgModule({
  declarations: [
         HomeComponent,
         CollectionBannerComponent,
         LogoComponent,
         ParallaxBannerComponent,
         SliderComponent,
         ProductSliderComponent,
         ProductTabComponent,
         ProductComponent,
         CartComponent,
         WishlistComponent,
         CompareComponent,
         CheckoutComponent,
         SuccessComponent,
         ProductDetailsComponent,
         CollectionComponent,
         NewProductComponent,
         CategoryComponent,
         ColorComponent,
         BrandComponent,
         PriceComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    BarRatingModule,
    InfiniteScrollModule,
    SlickCarouselModule,
    HttpClientModule,
    
    NgxSliderModule,
  ]
})
export class ShopModule { }
