import { Component, Input, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductoService } from '@shared/servicios/producto.service';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from '@productos/componentes/producto/producto.component';
import { Console } from 'console';
import { Producto } from '@models/producto.model';

@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [
    MatButtonModule,
    MatGridListModule,
    CommonModule,
    ProductoComponent,
  ],
  templateUrl: './producto-detalle.component.html',
  styleUrl: './producto-detalle.component.scss',
})
export class ProductoDetalleComponent {
  @Input() id?: string;

  producto = signal<Producto | null>(null);
  cover = signal('');
  private productoService = inject(ProductoService);

  ngOnInit() {
    if (this.id) {
      this.productoService.getOne(this.id).subscribe({
        next: (producto) => {
          this.producto.set(producto);
          if (producto.images.length > 0) this.cover.set(producto.images[0]);
        },
      });
    }
  }

  /* cada clic muestra otra imagen del mismo producto
  Funcionalidad dinamica*/
  changeCover(newImg: string) {
    this.cover.set(newImg);
  }
}
