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
    class="p-2 transition-all  text-gray-700 grid place-content-center bg-gray-100 rounded hover:-translate-y-1 transform-gpu" >
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
