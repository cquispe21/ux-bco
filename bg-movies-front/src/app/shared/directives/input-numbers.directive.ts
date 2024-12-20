import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[bgInputNumbersDirective]'
})
export class InputNumbersDirective {

  constructor(private _el: ElementRef) { }

  @Input() onlyNumbersEnable: boolean = true;

  @HostListener('keypress', ['$event']) onKeypress(event: any) {
    if( this.onlyNumbersEnable ) {
      var charCode = (event.which) ? event.which : event.keyCode;
      if ((charCode < 48 || charCode > 57)) {
        event.preventDefault();
        return false;
      } else {
        return true;
      }
    } else {
      return true
    }
  }

}
