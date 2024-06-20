import { Routes } from '@angular/router';
import { ListComponent } from './dominios/productos/pages/list/list.component';
import { AboutComponent } from './dominios/info/pages/about/about.component';
import { HeaderComponent } from './dominios/shared/componentes/header/header.component';
import { NotFoundComponent } from './dominios/info/pages/not-found/not-found.component';
import { LayoutComponent } from '@shared/componentes/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'about',
        component: AboutComponent
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
    component: NotFoundComponent
  }
];
