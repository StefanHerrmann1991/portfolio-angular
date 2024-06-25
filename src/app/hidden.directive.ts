import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHidden]'
})
export class HiddenDirective {

  constructor(private element: ElementRef) {
    this.element.nativeElement.classList.add('hidden');
      }
}
