import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { ProductoComponent } from './../../componentes/producto/producto.component';
import { Producto } from '@models/producto.model';
import { HeaderComponent } from '@shared/componentes/header/header.component';
import {MatCardModule} from '@angular/material/card';
import { CartService } from '@shared/servicios/cart.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductoComponent, HeaderComponent, MatCardModule], //HeaderComponent
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  productos: Producto[] = [];
  private cartService = inject(CartService);

  ngOnInit(): void {
    this.inicializarLista();
  }

  /*   //Padre
  formChild(event: Event) {
    console.log('Estamos en el padre');
    console.log(event);
  } */

  inicializarLista(): void {
    const longitud = this.randomIntFromInterval(1, 20);

    for (let index = 0; index < longitud; index++) {
      const producto = {
        title: `Producto ${index}`,
        img: `https://picsum.photos/id/${this.randomIntFromInterval(
          1,
          50
        )}/200/300`,
        price: this.randomIntFromInterval(1_000, 10_000),
      };

      this.productos.push(producto);
    }
  }

  /* randomIntFromInterval con este metodo se puede usar un
    rango numerico que se establece y lo utiliza aleatoriamente */

  randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  addToCart(producto: Producto) {
    this.cartService.addToCart(producto);
  }
}
