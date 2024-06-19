import { Component, signal } from '@angular/core';
import { CounterComponent } from '../../../shared/componentes/counter/counter.component';
import { CommonModule } from '@angular/common';
import { WaveAudioComponent } from '../../componentes/wave-audio/wave-audio.component';


import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

import { HighlighDirective } from '@shared/directivas/highligh.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ MatMenuModule, MatButtonModule,CounterComponent, CommonModule, WaveAudioComponent, HighlighDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  duration = signal(100);
  message = signal('Hola');

  /*Metodo para guardar cambios en el input, se utiliza:
  1.el tipado de Ts event: Event.
  2. declaro la variable como const input
  3. A la variable le asigno el event.target as HTMLInputElement
  4. apunto a al signal/atributo
  5. uso el metodo set
  6. al metodo set le paso el valor del input de acuerdo a su tipado como input.valueAsNumber*/

  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber);
  }

  changeMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value);
  }
}
