import { state } from '@angular/animations';
import { Injectable, computed, signal } from '@angular/core';
import { Producto } from '@models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
/*En los service va la logica del negocio*/
/*Este signal guarda en el carrito los productos que seleccione el usuario*/
cart = signal<Producto[]>([]);
total = computed(() => {
  const cart = this.cart();/* subscribcion */
  return cart.reduce((total, producto) => total + producto.price, 0);
})

  constructor() { }

  addToCart(producto: Producto){
    this.cart.update(state => [...state, producto]);
  }
}
