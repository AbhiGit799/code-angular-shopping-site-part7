import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Product } from 'src/app/shared/type/product.interface';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  products: Product[] = [];
  sliderProducts = [];

  constructor(public _productsService: ProductsService) { }

  ngOnInit(): void {
    this._productsService.getProducts().subscribe(res => {
      this.products = res;

      let items = res;

      while(items.length >0){
        this.sliderProducts.push(items.splice(0,3));
      }
    });
  }

}

