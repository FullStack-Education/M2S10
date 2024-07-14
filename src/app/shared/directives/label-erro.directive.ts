import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLabelErro]',
  standalone: true
})
export class LabelErroDirective {

  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.color = 'red';
    elementRef.nativeElement.style.fontSize = '12px';
    elementRef.nativeElement.style.fontWeight = '600';
  }

}
