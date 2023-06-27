import { DOCUMENT } from '@angular/common';
import { Directive, HostBinding, HostListener, Inject } from '@angular/core';

@Directive({
  selector: '[appAppNumbersonly]'
})
export class AppNumbersonlyDirective {

  
 
  @HostListener('keypress', ['$event'])
   public disableKeys(e: any) {
    
    return e.keyCode == 8 || (e.keyCode >= 48 && e.keyCode <= 57)
  }

  @HostListener('keyup', ['$event'])
  public removeExtra(e: any) {
   
   e.target.value = e.target.value.replace(/\D/g,'')

}

}
