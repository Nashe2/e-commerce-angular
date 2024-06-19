import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appHighligh]',
  standalone: true
})
export class HighlighDirective {
  elemento = inject(ElementRef);

  constructor() { }

  ngOnInit(){
    this.elemento.nativeElement.style.backgroundColor = "pink";
  }
}
