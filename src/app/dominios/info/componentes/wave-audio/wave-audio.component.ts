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
  imports: [],
  templateUrl: './wave-audio.component.html',
  styleUrl: './wave-audio.component.scss',
})
export class WaveAudioComponent implements AfterViewInit {
  /* A traves de un input se mandara el audio */
  /* el ! indica que no esta inicializada la variable y que no me arroje error, que que más adelante será inicializada */
  @Input({ required: true }) audioUrl!: string;
  @ViewChild('wave') container!: ElementRef;

  ngAfterViewInit(){
    //la referencia de container se obtiene con el decorador @ViewChild
    if (this.container) {
      console.log(this.container.nativeElement);
    } else {
      console.error('wave no está definido');
    }

    WaveSurfer.create({
    url: this.audioUrl,
    container: this.container.nativeElement,
    });
  }
}
/* este audio se utiliza en la vista about, es decir el componente wave se usa en la vista about */
