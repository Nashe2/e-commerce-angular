import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  inject,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  RouterLinkWithHref
} from '@angular/router';
import { Category } from '@models/category.model';
import { Producto } from '@models/producto.model';
import { ProductoComponent } from '@productos/componentes/producto/producto.component';
import { HeaderComponent } from '@shared/componentes/header/header.component';
import { CartService } from '@shared/servicios/cart.service';
import { CategoryService } from '@shared/servicios/category.service';
import { ProductoService } from '@shared/servicios/producto.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    CommonModule,
    ProductoComponent,
    HeaderComponent,
    MatCardModule,
    RouterLinkWithHref,
    MatButtonModule,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit, OnChanges {

  productos = signal<Producto[]>([]);
  categories = signal<Category[]>([]);
  /* Inyeccion de dependecias*/
  private cartService = inject(CartService);
  private productoService = inject(ProductoService);
  private categoryService = inject(CategoryService);

  @Input() category_id?: string;
  ngOnInit() {
    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getProductos();
  }
  /* ngOnChanges(){
  console.log(this.category_id);
  } */

  addToCart(producto: Producto) {
    this.cartService.addToCart(producto);
  }

  private getProductos() {
    this.productoService.getProductos(this.category_id).subscribe({
      next: (productos) => {
        this.productos.set(productos);
      },
      error: () => {},
    });
  }

  private getCategories() {
    this.categoryService.getAll().subscribe({
      next: (data) => {
        this.categories.set(data);
      },
      error: () => {},
    });
  }

}
