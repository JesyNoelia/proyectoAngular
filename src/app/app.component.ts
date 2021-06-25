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
      if (val instanceof NavigationEnd) {
        this.path = this.router.url;
        window.scrollTo(0, 0)
      }
      //avisa cuando se cambia una ruta
    });
  }

  /* ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  } */

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
