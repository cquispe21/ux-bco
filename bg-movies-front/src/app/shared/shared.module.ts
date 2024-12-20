import { NgModule } from '@angular/core';
import { InputNumbersDirective } from './directives/input-numbers.directive';
import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    InputNumbersDirective,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputNumbersDirective,
    CardComponent
  ]
})
export class SharedModule { }
