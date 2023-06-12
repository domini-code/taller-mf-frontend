import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AddToCartService {
  public count$ = signal(0);
  public cart$ = signal(0);
  public shoppingCart$ = signal([]);
  public currentProduct$ = signal({});

  /*   private productoAgregadoSource = new Subject<Producto>();
  productoAgregado$ = this.productoAgregadoSource.asObservable(); */

  constructor() {
 /*    document.addEventListener('productAdded', this.handleProductAdded);
    document.addEventListener(
      'quantityProductChanged',
      this.handleQuantityProductChanged
    ); */
  }


  isCartEmpty(): boolean {
    return this.shoppingCart$.length === 0;
  }

  handleProductAdded(event: any): void {
    // (event: CustomEvent) => {
    //  this.productoAgregadoSource.next(event.detail);
   // console.log('handleProductAdded', event.detail);
  }

  handleQuantityProductChanged(event: any): void {
    // {productId: 6, count: 2}
    // const { count } = event.detail;
    // this.count$.set(count);
    // this.shoppingCart$.set(event.detail);
    // console.log('handleQuantityProductChanged', event.detail);
  }


}
 /*  ngOnDestroy() {
    window.removeEventListener('productoAgregado');
  } */
