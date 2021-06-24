import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PerfilGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate() {
    // route: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;

    if (localStorage.getItem("token") === null) {
      this.router.navigate(['/login']);
    } else {
      return true;//retornara true(nos deja navegar hacia esa ruta), si retorna false no nos deja navegar
    }
  }
}








