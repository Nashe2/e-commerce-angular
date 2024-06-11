import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnDestroy, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

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
    ]
})
export class HeaderComponent/* implements OnDestroy */ {

    hideSideMenu = signal(true);

    /* MOSTRAR CUANTOS PRODUCTOS TENEMOS en el carrito*/
    @Input({required: true}) cart: Producto[] = [];

    toogleSideMenu(){
      this.hideSideMenu.update(prevState => !prevState);
    }
}
