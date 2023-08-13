import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { CartItem } from 'src/app/shared/type/cart-item.interface';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  shoppingCartItems: CartItem[] = [];

  constructor(private _translate: TranslateService, private _cartService: CartService, public _productsService: ProductsService) { }

  ngOnInit(): void {
    this._cartService.getItems().subscribe(res => {
      this.shoppingCartItems = res;
    });
  }

  changeLang(language: string) {
    this._translate.use(language);
  }
  removeItem(item: CartItem) {
    this._cartService.removeFromCart(item);
  }

  getTotalAmt(): Observable<number> {
    return this._cartService.getTotalAmount();
  }

}
