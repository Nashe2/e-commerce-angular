import { Routes } from '@angular/router';
import { ListComponent } from './dominios/productos/pages/list/list.component';
import { AboutComponent } from './dominios/info/pages/about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];
