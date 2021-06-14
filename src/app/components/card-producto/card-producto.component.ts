import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent implements OnInit {

  productos: Producto[];
  search: string;

  constructor(private productoService: ProductoService) {
    this.search = ""


  }

  ngOnInit(): void {
    this.productos = this.productoService.getAll();
  }
  onChange($event) {
    if ($event.target.value === "") {
      this.productos = this.productoService.getAll();
    } else {
      this.productos = this.productoService.getByCategoria($event.target.value)
    }
  }

  onClick() {
    this.productos = this.productoService.getByWord(this.search)
    console.log(this.search);

  }

}
