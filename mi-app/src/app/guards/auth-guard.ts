import {CanActivate, Router, UrlTree} from '@angular/router';
import {Auth} from '../services/auth';
import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private auth: Auth = inject(Auth)
  private router: Router = inject(Router);

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> {
    if(this.auth.estaAutenticado()){
      return true;
    } else {
      return this.router.parseUrl('/login')
    }
  }

}
