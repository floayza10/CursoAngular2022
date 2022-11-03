import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  nro?:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'MI primer Proyecto en Angular';
public ArregloTarjetas:Tarjeta[]=[]; 
  ngOnInit(): void {
   this.ArregloTarjetas=[
    {titulo:'Video 1', subtitulo: 'Subititulo Video 1',nro:5},
    {titulo:'Video 2', subtitulo: 'Subititulo Video 2',},
    {titulo:'Video 3', subtitulo: 'Subititulo Video 3',},
   ]
  }

}
