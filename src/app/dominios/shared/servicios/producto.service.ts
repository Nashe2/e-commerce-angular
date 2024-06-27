import { Injectable, inject } from '@angular/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Producto } from '@models/producto.model';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  /* Esto permite conectarse a la API, obtener y procesar esa informacion */
  private http = inject(HttpClient);

  constructor() {}
  /* getProductos() {
    return this.http.get<Producto[]>(`https://api.escuelajs.co/api/v1/products`);
  } */

  /* Con este metodo llamamos a URL de la API.*/
  getProductos(category_id?: string) {
    const url = new URL(`https://api.escuelajs.co/api/v1/products/`);
    if(category_id){
    url.searchParams.set('categoryId', category_id)
  }
    return this.http.get<Producto[]>(url.toString());
  }

  /* Este metodo va a consumir de la API los detalles de un producto en particular donde
  concatenamos el id */
  getOne(id: string) {
    return this.http.get<Producto>(`https://api.escuelajs.co/api/v1/products/${id}`
    );
  }
}
