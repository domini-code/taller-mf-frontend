
import { AfterContentInit, Component } from '@angular/core';

import { mount } from 'mf_navbar/reactApp';
@Component({
  selector: 'dominizon-navbar-react',
  template: `<div id="react-navbar"></div>`,
  standalone: true,
})
export class NavbarReactComponent implements AfterContentInit {

  ngAfterContentInit(): void {
    const fetch_el = document.getElementById('react-navbar');
    mount(fetch_el);
  }
}
