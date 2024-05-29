import { Routes } from '@angular/router';
import { ListComponent } from './dominios/productos/pages/list/list.component';
import { AboutComponent } from './dominios/info/pages/about/about.component';
//import { HeaderComponent } from './dominios/shared/componentes/header/header.component';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  /* {
    path: 'header',
    component: HeaderComponent
  } */
];
