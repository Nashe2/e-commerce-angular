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
  }
}
