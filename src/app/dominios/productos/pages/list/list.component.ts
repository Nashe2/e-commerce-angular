import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { ProductoComponent } from '@productos/componentes/producto/producto.component';
import { Producto } from '@models/producto.model';
import { HeaderComponent } from '@shared/componentes/header/header.component';
import { MatCardModule } from '@angular/material/card';
import { CartService } from '@shared/servicios/cart.service';
import { ProductoService } from '@shared/servicios/producto.service';
import { Category } from '@models/categoty.model';
import { CategoryService } from '@shared/servicios/category.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductoComponent, HeaderComponent, MatCardModule], //HeaderComponent
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {

  productos = signal<Producto[]>([]);
  categories = signal<Category[]>([]);
    /* Inyeccion de dependecias*/
  private cartService = inject(CartService);
  private productoService = inject(ProductoService);
  private categoryService = inject(CategoryService);

  ngOnInit() {
    this.getProductos();
    this.getCategories();
  }

  addToCart(producto: Producto) {
    this.cartService.addToCart(producto);
  }

  private getProductos() {
    this.productoService.getProductos().subscribe({
      next: (productos) => {
        this.productos.set(productos);
      },
      error: () => {

      }
    })
  }

  private getCategories() {
    this.categoryService.getAll().subscribe({
      next: (data) => {
        this.categories.set(data);
      },
      error: () => {

      }
    })
  }
}
