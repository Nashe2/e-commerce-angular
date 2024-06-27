import { Routes } from '@angular/router';
import { AboutComponent } from './dominios/info/pages/about/about.component';
import { HeaderComponent } from './dominios/shared/componentes/header/header.component';
import { LayoutComponent } from '@shared/componentes/layout/layout.component';
import { ProductoDetalleComponent } from '@productos/pages/producto-detalle/producto-detalle.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path: '',
        loadComponent: () => import('./dominios/productos/pages/list/list.component')
      },
      {
        path: 'about',
        loadComponent: () => import('./dominios/info/pages/about/about.component').then(m => m.AboutComponent)
      },
      {
        path: 'producto/:id',
        loadComponent: () => import('./dominios/productos/pages/producto-detalle/producto-detalle.component').then(m => m.ProductoDetalleComponent)
      },
    ]
  },
  /* Elimino esta ruta porque solo era para pruebas */
  /*
  {
    path: 'header',
    component: HeaderComponent
  }, */
  {
    path: '**',
    loadComponent: () => import('./dominios/info/pages/not-found/not-found.component')
  },
];
