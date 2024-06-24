import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Category } from '@models/categoty.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  /* Esto permite conectarse a la API, obtener y procesar esa informacion */
  private http = inject(HttpClient);
  constructor() {}

  /* Con este metodo llamamos a URL de la API.
    Se puede tipar, en este caso será un array porque necesito un array de category*/
  getAll() {
    return this.http.get<Category[]>(
      'https://api.escuelajs.co/api/v1/categories'
    );
  }
}
