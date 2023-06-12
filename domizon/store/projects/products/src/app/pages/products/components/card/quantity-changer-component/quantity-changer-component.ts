import {
  ChangeDetectionStrategy,
  Component,
  signal,
  effect,
  Input,
  EventEmitter,
  Output,
} from '@angular/core';
import { SVGPlusComponent } from './components/svg-plus/svg-plus.component';
import { SVGMinusComponent } from './components/svg-minus/svg-minus.component';
import { QuantityProductChanged } from '../../../interfaces/product.interface';


@Component({
  selector: 'dominizon-quantity-changer',
  templateUrl: './quantity-changer-component.html',
  standalone: true,
  imports: [SVGPlusComponent, SVGMinusComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuantityChangerComponent {
  public count$ = signal(0);
  @Input({ required: true }) productId!: number;

  @Output() quantityProductChanged = new EventEmitter<QuantityProductChanged>();

  constructor() {
    effect(() => {
      this.quantityProductChanged.emit({
        productId: this.productId,
        count: this.count$(),
      });
      /* const event = new CustomEvent('quantityProductChanged', {
        detail: {
          productId: this.productId,
          count: this.count$(),
        },
      });
      document.dispatchEvent(event); */
    });
  }

  onDecrement(): void {
    if (this.count$() > 0) {
      this.count$.update((currentValue) => currentValue - 1);
    }
  }

  onIncrement(): void {
    this.count$.update((currentValue) => currentValue + 1);
  }

  isBtnDisabled(): boolean {
    return this.count$() === 0;
  }
}
