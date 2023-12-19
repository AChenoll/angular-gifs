import { GifsService } from './../../services/gifs.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @ViewChild('txtInputEtiqueta')
  public inputEtiqueta!: ElementRef<HTMLInputElement>;
  // Indicamos que siempre habrá un valor con ! para evitar que marque error

  constructor(private gifsService: GifsService){

  }

  // buscarEtiqueta(nuevaEtiqueta: string){
  buscarEtiqueta(){
    const nuevaEtiqueta=this.inputEtiqueta.nativeElement.value;
    this.gifsService.buscarEtiqueta(nuevaEtiqueta);
    this.inputEtiqueta.nativeElement.value="";
  }
}
