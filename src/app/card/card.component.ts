import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public image:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTirHxQzoWPUFgJlbSq2gVRsXZjZ_cxygZL7OKlpKk5DI_rWHQf4gGOFh_BKjKax2wb7OY&usqp=CAU";
  public Titulo:string="Curso de Angular con Interporlacion";
  constructor() { }

  ngOnInit(): void {
  }

}
