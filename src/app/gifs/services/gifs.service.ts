import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historialEtiquetas: string[]=[];

  get historialEtiquetas(){
    return [...this._historialEtiquetas];
  }

  //Agregamos nueva etiqueta al array
  buscarEtiqueta(etiqueta:string): void{
    this._historialEtiquetas.unshift(etiqueta);
    console.log(this.historialEtiquetas);

  }

  constructor() { }
}
