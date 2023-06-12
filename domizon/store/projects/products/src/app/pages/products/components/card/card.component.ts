import { RouterTestingModule } from '@angular/router/testing';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  signal,

} from '@angular/core';
import { SlicePipe, TitleCasePipe, CurrencyPipe, NgIf } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { AddToCartComponent } from './add-to-cart-component/add-to-cart.component';
import { QuantityChangerComponent } from './quantity-changer-component/quantity-changer-component';
import {
  Product,
  QuantityProductChanged,
} from '../../interfaces/product.interface';


@Component({
  selector: 'dominizon-card',
  templateUrl: './card.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SlicePipe,
    TitleCasePipe,
    CurrencyPipe,
    NgIf,
    AddToCartComponent,
    QuantityChangerComponent,
    NgOptimizedImage,
  ],
})
export class CardComponent implements OnDestroy {
  shouldShowProductAddedText$ = signal(false);
  @Input({ required: true }) product!: Product;

  private productAndCount!: QuantityProductChanged;
  private timer!: any;

  onQuantityProductChange(productAndCount: QuantityProductChanged): void {
    // console.log('onQuantityProductChange', productAndCount);
    this.productAndCount = productAndCount;
  }

  onAddProduct(productId: number): void {
    if (this.productAndCount.productId === productId) {
      this.showProductAddedText();
      document.dispatchEvent(
        new CustomEvent('store:addToCart', {
          detail: {
            data: {
              product: this.product,
              count: this.productAndCount.count,
            },
          },
        })
      );
    }
  }

  private showProductAddedText(): void {
    this.shouldShowProductAddedText$.set(true);
    this.timer = setTimeout(() => {
      this.shouldShowProductAddedText$.set(false);
    }, 900);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }
}
// SI no hay cantidad el button debe estar desabilitado
