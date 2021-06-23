import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-productos-usuario',
  templateUrl: './productos-usuario.component.html',
  styleUrls: ['./productos-usuario.component.css']
})
export class ProductosUsuarioComponent implements OnInit {
  productosUsuario: Producto[];

  constructor(private productoService: ProductoService) { }

  async ngOnInit() {



    this.productosUsuario = await this.productoService.getArticulosByUsuario();
    console.log(this.productosUsuario);

    if (this.productosUsuario.length === 0) {
      console.log('no hay productos');
    } else {
      console.log(this.productosUsuario);
    }


  }

}
