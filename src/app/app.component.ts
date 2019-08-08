import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
    <div style="text-align:center">
    <h1>
      {{ title }}
    </h1>
    <pm-products></pm-products>
    </div>
    <router-outlet></router-outlet>
  `
})

export class AppComponent {
  title = 'Product Management';
}
