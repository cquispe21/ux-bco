import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CotizadorModule } from './cotizador/cotizador.module';
import { SharedModule } from './shared/shared.module';
import { CatalogModule } from './catalog/catalog.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CotizadorModule,
    SharedModule,
    CatalogModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
