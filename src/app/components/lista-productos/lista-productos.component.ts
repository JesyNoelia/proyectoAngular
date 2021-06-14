import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos: Producto[];
  search: string;
  currentPage: number;

  constructor(private productoService: ProductoService) {

    this.productos = [];
    this.search = "";
    this.currentPage = 1;
  }

  ngOnInit(): void {
    this.productoService.getAll()
      .then(response => { console.log(response) }
      )
      .catch(error => console.log(error));
  }

  onChange($event) {
    /* if ($event.target.value === "") {
      this.productos = this.productoService.getAll();
    } else {
      this.productos = this.productoService.getByCategoria($event.target.value)
    } */
  }

  onClick() {
    this.productos = this.productoService.getByWord(this.search)
    console.log(this.search);

  }

  onClickBtn(siguiente: boolean) {
    this.currentPage = siguiente ? (this.currentPage + 1) : (this.currentPage - 1);

    this.productoService.getAll(this.currentPage)
      .then(response => this.productos = response)
      .catch(error => console.log(error))
  };

}
