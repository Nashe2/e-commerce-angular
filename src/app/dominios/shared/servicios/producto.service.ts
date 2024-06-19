import { Injectable, inject } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Producto } from '@models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
/* Esto permite conectarse a la API, obtener y procesar esa informacion */
  private http = inject(HttpClient);

  constructor() { }

  /* Con este metodo llamamos a URL de la API.
    Se puede tipar, en este caso será un array porque necesito un array de productos*/
  getProductos(){
    return this.http.get<Producto[]>('https://api.escuelajs.co/api/v1/products');
  }
}
