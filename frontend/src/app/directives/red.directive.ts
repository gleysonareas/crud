import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})

// Esse é um exemplo de diretiva de atributo
export class RedDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#e35e6b';
   }

}
