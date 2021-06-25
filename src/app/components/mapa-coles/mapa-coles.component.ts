/// <reference path="../../../../node_modules/@types/googlemaps/index.d.ts" />


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ColegioService } from 'src/app/services/colegio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mapa-coles',
  templateUrl: './mapa-coles.component.html',
  styleUrls: ['./mapa-coles.component.css']
})
export class MapaColesComponent implements OnInit {

  latitud: number;
  longitud: number;
  arrColegios: any[];
  search: string;
  map: any;


  constructor(private colegiosService: ColegioService) {
    this.latitud = 40;
    this.longitud = -3;
    this.search = "";

  }

  ngOnInit(): void {
    window.scroll(0, 0);
  }

  ngAfterViewInit() {
    navigator.geolocation.getCurrentPosition(position => {
      this.latitud = position.coords.latitude;
      this.longitud = position.coords.longitude;
    })

    this.colegiosService.getAllColes()
      .then(response => {
        //console.log(response);
        this.arrColegios = response;
      })
      .catch(error => {
        console.log(error);
      });
  };

  async onClick() {
    //this.map.setCenter(new google.maps.LatLng(1, 3))
    console.log(this.search);

    if (this.search === "") {
      this.arrColegios = await this.colegiosService.getAllColes();

    } else {
      this.arrColegios = await this.colegiosService.buscarPorPalabra(this.search);
      this.map.setCenter(new google.maps.LatLng(this.arrColegios[0].latitud, this.arrColegios[0].longitud))
      console.log(this.arrColegios);

      if (this.arrColegios.length === 0) {
        Swal.fire('Lo sentimos', 'Los criterios de búsqueda no coinciden con los colegios registrados', 'error')
        console.log(this.arrColegios);

        this.arrColegios = await this.colegiosService.getAllColes();
      };
    };
  };

  onMapReady($event) {
    this.map = $event;

  }


};
