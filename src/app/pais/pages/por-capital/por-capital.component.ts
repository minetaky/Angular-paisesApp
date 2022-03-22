import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { CapitalService } from '../../services/capital.service';


@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private _capitalService: CapitalService) { }

  buscar( termino: string ){
    this.hayError = false;
    this.termino = termino;

    this._capitalService.buscarCapital( termino )
      .subscribe( (resp) => {
        console.log('buscando por capital: ', termino);
      console.log(resp);
      this.paises = resp;
    },(err) =>{
      this.hayError = true;
      this.paises = [];
    });
  }





}
