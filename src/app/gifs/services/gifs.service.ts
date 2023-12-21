import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historialEtiquetas: string[]=[];
  private apiKey:string='t9ZDvPfZcLdTlPPHwB1cWjRhQMcxZQV9'

  constructor(private http: HttpClient) { }

  get historialEtiquetas(){
    return [...this._historialEtiquetas];
  }

  //Agregamos nueva etiqueta al array
  buscarEtiqueta(etiqueta:string): void{
    if (!this._historialEtiquetas.includes(etiqueta.toLowerCase())) { //Compruebo si la busqueda se ha repetido, pasando siempre la etiqueta a minuscula
      this._historialEtiquetas.unshift(etiqueta.toLowerCase()); // Guardo siempre la etiqueta en minuscula para ignorar mayusculas

      if(this._historialEtiquetas.length>10){ // Si en el array hay mas de 10 etiquetas borro la ultima de la lista
        this._historialEtiquetas.pop();
      }
    console.log(this.historialEtiquetas);
    } else { // Si la busqueda ya existe, borro la anterior y la paso al principio de la lista
      var posicion=this._historialEtiquetas.indexOf(etiqueta);
      this._historialEtiquetas.splice(posicion, 1);
      this._historialEtiquetas.unshift(etiqueta);
    }
  }

}
