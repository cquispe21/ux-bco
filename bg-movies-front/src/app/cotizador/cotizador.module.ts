import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CotizadorFormComponent } from './components/forms/cotizador-form/cotizador-form.component';
import { CotizadorSectionComponent } from './components/pages/cotizador-section/cotizador-section.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CotizadorFormComponent,
    CotizadorSectionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    CotizadorFormComponent,
    CotizadorSectionComponent
  ]
})
export class CotizadorModule { }
