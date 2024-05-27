import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-wave-audio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.scss',
})
export class WaveAudioComponent implements AfterViewInit {
  /*
  Nota:
  - A traves del decorador input se mandara el audio
  - El ! indica que no esta inicializada la variable y que no me arroje error, que que más adelante será inicializada

  - Las librerias se llaman en el metodo ngAfterViewInit
  - Después de que los hijos ya fueron renderizados para obtener la REFERENCIA #wave con @viewChild
    y lo llamamos con conteiner para que haga esa renderizacion

  - La referencia de container se obtiene con el decorador @ViewChild
  - Y nativeElement es el elemento nativo de html
  - Este audio se utiliza en la vista about, es decir el componente wave se usa en la vista about
  */

  @Input({ required: true }) audioUrl!: string;
  @ViewChild('wave') container!: ElementRef;

  ngAfterViewInit() {
    if (this.container) {
      console.log(this.container.nativeElement);
    } else {
      console.error('wave no está definido');
    }

    /* Metodo de creacion del objeto */
    WaveSurfer.create({
      url: this.audioUrl,
      container: this.container.nativeElement,
    });
  }
}
