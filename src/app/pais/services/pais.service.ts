import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais-interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  
                           
  private apiUrl: string = 'https://restcountries.com/v3.1';
  private apiUrlFiltro: string = 'https://restcountries.com/v2';

  get paramsHttp() { 
    return new HttpParams().set('fields','capital,name,population,cca2,flags');
}

  constructor(private http: HttpClient) { }



  buscarPais(termino: string): Observable<Country[]>{

    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.paramsHttp } );
  }

  

  getPaisPorAlpha(termino: string): Observable<Country[]>{

    const url = `${ this.apiUrl }/alpha/${ termino }`;

    return this.http.get<Country[]>( url );
  }



  buscarCapital(termino: string): Observable<Country[]>{

    const url = `${ this.apiUrl }/capital/${ termino }`;

    return this.http.get<Country[]>( url, { params: this.paramsHttp } );
  }

  buscarRegion(termino: string): Observable<Country[]>{

    const url = `${ this.apiUrl }/region/${ termino }`;

    return this.http.get<Country[]>( url, { params: this.paramsHttp } )
    .pipe(
      tap( console.log )
    )
  }
  

}
