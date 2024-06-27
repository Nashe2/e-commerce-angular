import { Component, Input, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductoService } from '@shared/servicios/producto.service';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from '@productos/componentes/producto/producto.component';
import { Console } from 'console';
import { Producto } from '@models/producto.model';
import { CartService } from '@shared/servicios/cart.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [
    MatButtonModule,
    MatGridListModule,
    CommonModule,
    ProductoComponent,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './producto-detalle.component.html',
  styleUrl: './producto-detalle.component.scss',
})
export class ProductoDetalleComponent {
  sanitizer = inject(DomSanitizer);

  @Input() id?: string;

  producto = signal<Producto | null>(null);
  cover = signal('');
  private productoService = inject(ProductoService);
  private cartService = inject(CartService);

  ngOnInit() {
    if (this.id) {
      this.productoService.getOne(this.id).subscribe({
        next: (producto) => {
          producto.images = [
            'https://fastly.picsum.photos/id/863/200/300.jpg?hmac=4kin1N4a7dzocUZXCwLWHewLobhw1Q6_e_9E3Iy3n0I',
            'https://fastly.picsum.photos/id/948/200/300.jpg?hmac=P3pbS5OFe3xlh-_nxsMU3WRWDS5lXF_rBKQZIL_7wPo',
            'https://fastly.picsum.photos/id/318/200/300.jpg?hmac=WEC_ft7NGxXgRDHWhj1tz7_gmAOrnI9d5IiS98juw8I',
          ];
          this.producto.set(producto);
          if (producto.images.length > 0) this.cover.set(producto.images[0]);
        },
      });
    }
  }

  /* cada clic muestra otra imagen del mismo producto
  Funcionalidad dinamica*/
  changeCover(newImg: string) {
    console.log(newImg);
    this.cover.set(newImg);
  }

  /* Function para agregar productos al carrito */
  addToCart() {
    const producto = this.producto();
    if (producto) {
      this.cartService.addToCart(producto);
    }
  }

  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
