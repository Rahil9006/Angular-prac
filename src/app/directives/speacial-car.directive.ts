import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSpeacialCar]'
})
export class SpeacialCarDirective {

  specialCharactersRegex: RegExp = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
  constructor(private el: ElementRef) { }
  @HostListener('input', ['$event'])
  public disableKeys(e: any) {
    const input = this.el.nativeElement;
    const value = input.value;
    if (!this.specialCharactersRegex.test(value)) {
      input.value = value.replace(/[^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g, '');
    }
  

}
}
