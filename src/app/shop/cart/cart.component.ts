import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { CartItem } from 'src/app/shared/type/cart-item.interface';
import { Product } from 'src/app/shared/type/product.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  shoppingCartItems: CartItem[] = [];

  constructor(private _cartService: CartService, public _productsService: ProductsService) { }

  ngOnInit(): void {
    this._cartService.getItems().subscribe(res => {
      this.shoppingCartItems = res;
    });
  }

  increment(product: Product, qty: number = 1) {
    this._cartService.updateToCart(product, qty);
  }

  decrement(product: Product, qty: number = -1) {
    this._cartService.updateToCart(product, qty);
  }

  removeItem(item: CartItem) {
    this._cartService.removeFromCart(item);
  }

  getTotalAmt(): Observable<number> {
    return this._cartService.getTotalAmount();
  }

}
