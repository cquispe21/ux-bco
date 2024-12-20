import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogSectionComponent } from './components/pages/catalog-section/catalog-section.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CatalogSectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CatalogSectionComponent
  ]

})
export class CatalogModule { }
