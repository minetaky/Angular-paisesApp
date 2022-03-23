import { Component, Input, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
  li{
        cursor: pointer;
      }`
  ]
})
export class PorPaisComponent  {


  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private _paisService: PaisService) { 
  }

  buscar( termino: string ){
    this.hayError = false;
    this.termino = termino;

    this._paisService.buscarPais( termino )
      .subscribe( (resp) => {
      console.log(resp);
      this.paises = resp;
    },(err) =>{
      this.hayError = true;
      this.paises = [];
    });
  }



  sugerencias( termino: string ){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    
    this._paisService.buscarPais( termino ).subscribe(
      paises => this.paisesSugeridos = paises.splice(0,5),
      (err) => this.paisesSugeridos = []
    );


  }

  buscarSugerido(termino: string){
    this.buscar( termino );
  }



}
