import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  public busquedas: string[]=[]

  constructor(private gifsService:GifsService){}

  mostrarBusquedas(){
    this.busquedas=this.gifsService.historialEtiquetas;
    return this.busquedas;
  }

  anadir(nombreEtiqueta:string){
    this.gifsService.buscarEtiqueta(nombreEtiqueta)
  }

}
