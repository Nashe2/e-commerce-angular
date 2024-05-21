import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
/* Ejemplo de componentes material angular */
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, CurrencyPipe], // ReactiveFormsModule, MatCardModule, MatButtonModule
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss',
})
export class ProductoComponent {
  /* Este componente que esta actuando como routing va a página que mostre una lista de productos reutilizando el cpmponente producto*/
  //Ahora usaremos la directiva input
  //Hijo

  @Input() img: string = '';
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) price: number = 0;

  @Output() addToCart = new EventEmitter();

  addToCartHandler() {
    console.log('click form child');
    this.addToCart.emit('hola es un mensaje desde el hijo' + this.title);
  }
}
