import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public listadoGifs:Gif[]=[];

  private _historialEtiquetas: string[]=[];
  private apiKey:string='t9ZDvPfZcLdTlPPHwB1cWjRhQMcxZQV9'
  private serviceUrl:string='api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) { }

  get historialEtiquetas(){
    return [...this._historialEtiquetas];
  }

  //Agregamos nueva etiqueta al array
  buscarEtiqueta(etiqueta:string): void{
    if (etiqueta.trim()=== '')return;
    const etiquetaLowerCase=etiqueta.toLowerCase();
    this._historialEtiquetas=[etiquetaLowerCase, ...this._historialEtiquetas.filter(item => item !== etiquetaLowerCase)];
    if(this._historialEtiquetas.length>10){
      this._historialEtiquetas=this._historialEtiquetas.slice(0,10);
    }

    const params=new HttpParams()
      .set('api_key',this.apiKey)
      .set('limit', 10)
      .set('q',etiqueta);

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, {params}).subscribe( resp => {
      this.listadoGifs=resp.data;

      console.log(resp.data[0].images.fixed_height);
    })

    this.almacenarLocalStorage();
  }

  private almacenarLocalStorage(): void{
    localStorage.setItem('historial', JSON.stringify(this._historialEtiquetas));
  }

}
