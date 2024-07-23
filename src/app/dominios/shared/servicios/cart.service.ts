import { state } from '@angular/animations';
import { Injectable, computed, signal } from '@angular/core';
import { Producto, ProductoCarrito } from '@models/producto.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  /*En los service va la logica del negocio*/
  /*Este signal guarda en el carrito los productos que seleccione el usuario*/
  cart = signal<Producto[]>([]);
  total = computed(() => {
    const cart = this.cart(); /* subscribcion */
    return cart.reduce((total, producto) => total + producto.price, 0);
  });

  cartMenu = computed(() => {
    const cart = this.cart();
    // Hace unico la lista de productos, esto con el objetivo de mostrarlo de manera mas limpia en la UI
    return (
      [...new Set(cart)]
        // Mapea el producto al nuevo modelo
        .map((item) => ({
          producto: item,
          id: item.id,
          count: 0,
          total: 0.0,
        }))
        .reduce((lista: ProductoCarrito[], producto) => {
          // Cuenta cuentas veces aparece el elemento en la lista
          producto.count =
            cart.filter((item) => item.id === producto.id)?.length ?? 0;
          producto.total = producto.count * producto.producto.price;
          return [...lista, producto];
        }, [])
    );
  });

  constructor() {}

  addToCart(producto: Producto) {
    this.cart.update((state) => [...state, producto]);
  }

  sumarProductoCarrito(producto: Producto) {
    this.cart.update((state) => [...state, producto]);
  }

  restarProductoCarrito(producto: Producto) {
    // Busca que en la lista se encuentra el producto
    const index = this.cart().findIndex((item) => item.id == producto.id);
    if (index >= 0) {
      this.cart.update((state) => {
        // Elimina el producto respecto a su index, elimina un nuevo elemento
        state.splice(index, 1);
        // Genera una nueva referencia para que se actualice el valor de la lista
        return [...state];
      });
    }
  }
}
