import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet />'
})
/*   templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
  y se desase del html y css*/
export class AppComponent {
  title = 'e-commerce-angular';
}
