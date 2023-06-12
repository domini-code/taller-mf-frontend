import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { SVGCartComponent } from './components/svg-cart/svg-cart.component';

@Component({
  selector: 'dominizon-add-to-cart',
  template: ` <button
    (click)="onAddToCart()"
    class="py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded  active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center"
  >
    Add to cart
    <dominizon-svg-cart />
  </button>`,
  standalone: true,
  imports: [SVGCartComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddToCartComponent {
  @Input({ required: true }) productId!: number;
  @Output() addProduct = new EventEmitter<number>();

  onAddToCart(): void {
    this.addProduct.emit(this.productId);
  }
}
