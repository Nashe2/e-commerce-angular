//pipes
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
/* Ejemplo de componentes material angular */
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Producto } from '@models/producto.model';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, TimeAgoPipe, CurrencyPipe, UpperCasePipe, ReversePipe, RouterLinkWithHref],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss',
})
export class ProductoComponent {
  /* Este componente que esta actuando como routing va a página que mostre una lista de productos reutilizando el cpmponente producto*/
  //Ahora usaremos la directiva input
  //Hijo

  /* @Input() img: string = '';
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) price: number = 0; */

  @Input({ required: true }) producto!: Producto;
  @Output() addToCartEvent = new EventEmitter<Producto>();

  addToCartHandler() {
    this.addToCartEvent.emit(this.producto);
  }
}
