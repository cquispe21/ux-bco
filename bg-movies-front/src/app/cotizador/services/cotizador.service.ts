import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { IApiResponse } from "src/app/shared/models/api-response";
import { ICalculate } from "src/app/shared/models/calculate";

const COTIZADOR_URL: string = `${environment.urlBase}v1/saving-quoter`;

@Injectable({
  providedIn: 'root'
})
export class CotizadorService {

  constructor( private http: HttpClient ) { }

  getSavingsQuoter( params: any ) {
    const HTTP_PARAMS = new HttpParams({ fromObject : params })
    return this.http.get<IApiResponse<ICalculate>>( COTIZADOR_URL, { params: HTTP_PARAMS } );
  }
}
