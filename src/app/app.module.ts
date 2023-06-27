import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNumbersonlyDirective } from './directives/app-numbersonly.directive';
import { SpeacialCarDirective } from './directives/speacial-car.directive';
import { SpecialDirective } from './directives/special.directive';
import { ColorDirective } from './directives/color.directive';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppNumbersonlyDirective,
    SpeacialCarDirective,
    SpecialDirective,
    ColorDirective,
    
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
