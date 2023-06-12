import { Component, OnInit, Signal, inject } from '@angular/core';
import { ProductsService } from './services/product.service';
import { Observable, fromEvent } from 'rxjs';
import { Product } from './interfaces/product.interface';
import { NgFor, NgIf, AsyncPipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AddToCartService } from './services/add-to-cart.service';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'dominizon-products',
  templateUrl: './products.component.html',
  standalone: true,
  providers: [ProductsService],
  imports: [NgIf, NgFor, AsyncPipe, CardComponent, HttpClientModule],
})
export class ProductsComponent implements OnInit {
  products$!: Observable<Product[]>;
  cartReadonly!: Signal<number>;
  isCartEmpty = true;
  private readonly productsSvc = inject(ProductsService);
  private readonly addToCartSvc = inject(AddToCartService);

  constructor() {
    this.cartReadonly = this.addToCartSvc.cart$.asReadonly();
    this.isCartEmpty = this.addToCartSvc.isCartEmpty();
  }

  ngOnInit() {
    this.products$ = this.productsSvc.getProducts();
  }

}

/*      fromEvent(document, 'sharedData').subscribe((event) => {
      console.log('fromEvent', event);
    }); */
