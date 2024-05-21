import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { AboutComponent } from '../../../info/pages/about/about.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent implements OnChanges {
  @Input({ required: true }) message: string = '';
  @Input({ required: true }) duration: number = 0;

  constructor() {
    console.log('soy el constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('-'.repeat(10));
    console.log('OnChanges');
    console.log(changes);

    const duration = changes['duration'];
    if(duration){
      this.doSomething();
    }
  }

  ngOnInit() {
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

  /* Metodo que se va a ejecutar cada vez que el input cambie */
  doSomething() {
    console.log('change duration');
  }
}
