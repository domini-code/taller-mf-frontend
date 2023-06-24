import { Component } from '@angular/core';
import { ProductsComponent } from './pages/products/products.component';

@Component({
  selector: 'dominizon-root',
  standalone:true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports:[ProductsComponent]
})
export class AppComponent {
  title = 'products';
}
