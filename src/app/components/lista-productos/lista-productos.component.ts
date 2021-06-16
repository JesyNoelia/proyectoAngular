import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  arrProductos: Producto[];
  search: string;
  currentPage: number;


  constructor(private productoService: ProductoService) {


    this.search = "";
    this.currentPage = 1;
  }

  ngOnInit(): void {
    this.productoService.getAll()
      .then(response => {
        this.arrProductos = response
        //console.log(this.arrProductos);
      })

      .catch(error => console.log(error));
  }

  async onChange($event) {
    if ($event.target.value === "") {
      this.arrProductos = await this.productoService.getAll();
    } else {
      this.arrProductos = await this.productoService.getByCategoria($event.target.value)
    }
  }

  async onClick() {
    if (this.search === "") {
      this.arrProductos = await this.productoService.getAll();
    } else {
      Swal.fire('Lo sentimos', 'Los criterios de búsqueda no coinciden con los productos disponibles', 'error')
      this.arrProductos = await this.productoService.getByWord(this.search)
      if (this.arrProductos.length === 0) {
        this.arrProductos = await this.productoService.getAll();
      }
    }
  }

  onClickBtn(siguiente: boolean) {
    this.currentPage = siguiente ? (this.currentPage + 1) : (this.currentPage - 1);
    console.log(this.currentPage);

    this.productoService.getAll(this.currentPage)
      .then(response => this.arrProductos = response)
      .catch(error => console.log(error))
  };
}
