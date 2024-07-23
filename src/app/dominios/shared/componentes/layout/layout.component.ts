import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { MediaMatcher } from '@angular/cdk/layout';
import { MenuItem } from '@models/menu-item.model';
import { CartService } from '@shared/servicios/cart.service';
import { Producto, ProductoCarrito } from '@models/producto.model';
import { MatExpansionModule } from '@angular/material/expansion';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    MatCardModule,
    HeaderComponent,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    CurrencyPipe
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  private cartService = inject(CartService);
  cart = this.cartService.cartMenu;


  total = this.cartService.total;

  menuItems: MenuItem[] = [
    {
      name: 'Home',
      path: '/',
      icon: 'home',
    },
    {
      name: 'Productos',
      icon: 'checkroom',
    },
    {
      name: 'Servicios',
      path: '/servicio',
      icon: 'search',
    },
    {
      name: 'Desactivar alertas',
      icon: 'notifications_off',
    },
    {
      name: 'Nosotros',
      path: '/about',
      icon: 'info',
    },
    {
      name: 'Buscar',
      icon: 'search',
    },
  ];

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  onClickRestar(producto: ProductoCarrito): void {
    this.cartService.restarProductoCarrito(producto.producto)
    //this.cartService.deleteToCart(producto.);
  }

  onClickSumar(producto: ProductoCarrito): void {
    this.cartService.addToCart(producto.producto);
  }
}
