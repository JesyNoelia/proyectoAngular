import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public path: string;

  constructor(private activate: ActivatedRoute, private router: Router) {
    router.events.subscribe((val) => {
      // see also 
      if (val instanceof NavigationEnd) {
        this.path = this.router.url;

      }
      //avisa cuando se cambia una ruta
    });
  }

  getImage() {
    //console.log(this.path);

    switch (this.path) {
      case '/form':
        return '../../../assets/imagenes/cuadradosazules.png';
      case '/login':
        return '../../../assets/imagenes/circulosnaranjas.png';
      case '/registro':
        return '../../../assets/imagenes/triangulosverdes.png';
      case '/contacto':
        return '../../../assets/imagenes/lineasvioletas.png';


    }
  }
}
