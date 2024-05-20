import { Component } from '@angular/core';
/* Ejemplo de componentes material angular */
import { ReactiveFormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
//import { MatCardModule } from '@angular/material/card';
//import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [ReactiveFormsModule, MatGridListModule], // ReactiveFormsModule, MatCardModule, MatButtonModule
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss',
})
export class ProductoComponent {
  /* Este componente que esta actuando como routing va a página que mostre una lista de productos reutilizando el cpmponente producto*/
  img = 'https://picsum.photos/640/640?r=' + Math.random();
}
