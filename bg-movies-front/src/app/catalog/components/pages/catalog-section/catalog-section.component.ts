import { Component, OnInit } from '@angular/core';
import { CatalogService } from 'src/app/catalog/services/catalog.service';

@Component({
  selector: 'bg-catalog-section',
  templateUrl: './catalog-section.component.html',
  styleUrls: ['./catalog-section.component.css']
})
export class CatalogSectionComponent implements OnInit {
  movies: any[] = [];


  constructor(private catalogService: CatalogService) {
  }

  ngOnInit(): void {
   this.getCatalog();
  }

  getCatalog(){
    this.catalogService.getCatalog().subscribe((response: any) => {
      // this.movies = response;
      this.movies = response.results;
    })
  }

}
