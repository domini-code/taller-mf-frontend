import { Component } from '@angular/core';
import { NavbarReactComponent } from './shared/components/navbar-react/navbar-react.component';
import { RouterOutlet } from '@angular/router';
import { LoadingComponent } from './shared/components/loading/loading.component';

@Component({
  selector: 'dominizon-root',
  standalone:true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports:[NavbarReactComponent, RouterOutlet, LoadingComponent]
})
export class AppComponent {
  title = 'shell';
}
