import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule],
  //template: '<router-outlet />'
  templateUrl: './app.component.html',
})
/*   templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
  y se desase del html y css*/
export class AppComponent {
  title = 'e-commerce-angular';
}
