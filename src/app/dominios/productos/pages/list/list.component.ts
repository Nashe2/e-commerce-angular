import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { ProductoComponent } from './../../componentes/producto/producto.component';
import { Producto } from '@models/producto.model';
import { HeaderComponent } from '@shared/componentes/header/header.component';
import { MatCardModule } from '@angular/material/card';
import { CartService } from '@shared/servicios/cart.service';
/* import { ProductoService } from '@shared/servicios/producto.service'; */

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductoComponent, HeaderComponent, MatCardModule], //HeaderComponent
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  productos: Producto[] = [];
  /*productos = signal<Producto[]>([]);*/
  private cartService = inject(CartService);
  /* Inyeccion de dependecias para conectarse al API */
  /* private productoService = inject(ProductoService); */

  /*ngOnInit() {
    this.productoService.getProductos().subscribe({
      next: (productos) => {
        this.productos.set(productos);
      },
      error: () => {

      }
    })
  }*/

  ngOnInit(): void {
    this.inicializarLista();
  }
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
