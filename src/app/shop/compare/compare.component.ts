import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { CompareService } from 'src/app/shared/services/compare.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { Product } from 'src/app/shared/type/product.interface';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {

  compareListItems: Product[] = [];

  constructor(private _cartService: CartService, public _productsService: ProductsService,
    private _compareService: CompareService) { }


  ngOnInit(): void {
    this._compareService.getItems().subscribe(res => {
      this.compareListItems = res;
    });
  }

  removeItem(item: Product) {
    this._compareService.removeFromComparelist(item);
  }

  addToCartFromCompareList(product: Product) {
    this._cartService.addToCart(product);
  }

}
