import { CommonModule } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  SimpleChanges,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { MediaMatcher } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Producto } from '@models/producto.model';
import { RequiredValidator } from '@angular/forms';
/* import { ListComponent } from "../../../productos/pages/list/list.component"; */

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    /* ListComponent, */
  ],
})
export class HeaderComponent /* implements OnDestroy */ {
  hideSideMenu = signal(true);

  /* MOSTRAR CUANTOS PRODUCTOS TENEMOS en el carrito*/
  @Input({ required: true }) cart: Producto[] = [];

  total = signal(0);

  toogleSideMenu() {
    this.hideSideMenu.update((prevState) => !prevState);
  }

  /*  Nota no es buena practica ejecutar funciones en el template, por el rendimiento por eso es mejor usar un signal.
- Primero hago la funcion calTotal.
- Creo la variable total la convierto en signal y la inicializo en cero.
- Para que se recalcule cada vez que hagamos un cambio en el input uso el metodo ngOnChanges.
- En este metodo creo un block scope (const) con la variable cart  asignado el cambio en el carrito para preguntarle si algo en el cart ha cambiado.
- Proceso la funcion en el metodo ngOnChanges */
  ngOnChanges(changes: SimpleChanges): void {
    const cart = changes ['cart'];
    if(cart){
      this.total.set(this.calTotal());
    }
  }
  /*Metodo para calcular el precio total de los productos en el carrito:
    1.hago referencia al carrito
    2.Utilizo el metodo reduce para el calculo
    3.En el primer paso de ese calculo:
      uso la variable total y el objeto a utilizar en este caso es producto
      mediante un arrow function escribo el proceso de la operacion e inicializo en cero el total
    */
  calTotal() {
    return this.cart.reduce((total, producto) => total + producto.price, 0);
  }
}
