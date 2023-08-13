import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { CompareService } from 'src/app/shared/services/compare.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { WhishlistService } from 'src/app/shared/services/whishlist.service';
import { Product } from 'src/app/shared/type/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  variantImage: string;

  rate = 4;
  max=5;

  constructor(public _productsService: ProductsService, private _cartService: CartService,
    private _wishlistService: WhishlistService, private _compareService: CompareService) { }

  ngOnInit(): void {
    this.variantImage = this.product.variants.length > 0 ? this.product.variants[0].images : '';
  }

  changeVariant(img: string) {
    this.variantImage = img;
  }

  addToCart() {
    this._cartService.addToCart(this.product);
  }

  addToWishlist() {
    this._wishlistService.addToWishlist(this.product);
  }

  addToCompare() {
    this._compareService.addToCompare(this.product);
  }

}
