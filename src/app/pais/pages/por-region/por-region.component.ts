import { Component } from '@angular/core';

import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent  {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];
  //termino: string = '';
  hayError: boolean = false;

  constructor( private _paisService: PaisService ) { }

getClaseCSS( region: string ): string{
  return ( region === this.regionActiva) 
          ? 'btn btn-primary' 
          : 'btn btn-outline-primary' ;
}

activarRegion( termino: string){

  this.hayError = false;

  if(termino === this.regionActiva){
    return;
  }

    this._paisService.buscarRegion(termino)
      .subscribe( (resp) => {
        console.log('buscando por capital: ', termino);
      console.log(resp);
      this.paises = resp;
    },(err) =>{
      this.hayError = true;
      this.paises = [];
    });
}

 //TODO: hacer el llamado al servicio





  //'EU',  'EFTA',  'CARICOM',  'PA',  'AU',  'USAN',  'EEU',  'AL',  'ASEAN',  'CAIS',  'CEFTA',  'NAFTA',  'SAARC'




}
