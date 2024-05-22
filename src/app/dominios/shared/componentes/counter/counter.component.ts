import {
  Component,
  Input,
  SimpleChanges,
  OnChanges,
  signal,
} from '@angular/core';
import { AboutComponent } from '../../../info/pages/about/about.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, AboutComponent ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent implements OnChanges {
  @Input({ required: true }) message: string = '';
  @Input({ required: true }) duration: number = 0;
  //counter = signal(0); //importe signal
  //counterRef: number | undefined;

  constructor() {
    console.log('soy el constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('-'.repeat(10));
    console.log('OnChanges');
    console.log(changes);

    const duration = changes['duration'];
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }

  ngOnInit() {
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
    //this.counterRef = window.setInterval(() => {
      //this.counter.update((statePrev) => statePrev + 1);
    //}, 1000);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));

  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
    //window.clearInterval(this.counterRef);
  }

  /* Metodo que se va a ejecutar cada vez que el input cambie */
  doSomething() {
    console.log('change duration');
    //asyn
  }
}
