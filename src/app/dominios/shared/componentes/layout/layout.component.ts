import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [MatCardModule, HeaderComponent, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
