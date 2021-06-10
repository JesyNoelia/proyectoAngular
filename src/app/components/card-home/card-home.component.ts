import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.css']
})
export class CardHomeComponent implements OnInit {

  @Input() titulo: string;
  @Input() texto: string;
  @Input() color: string;
  @Input() imagen: string;
  @Input() ruta: string;
  @Input() textoBoton: string;

  constructor() {

  }

  ngOnInit(): void {
  }

}
