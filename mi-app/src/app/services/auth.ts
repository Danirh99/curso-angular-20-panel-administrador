import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private userSubject = new BehaviorSubject<User | null>(this.getUsuarioDesdeStorage());
  user$ = this.userSubject.asObservable();

  // Metodo que nos sirve para simular
  login() {
    const usuarioFalso : User = {
      id: 1,
      nombre: "Juan",
      email: "email@prueba.com"
    }
    localStorage.setItem('usuario', JSON.stringify(usuarioFalso));

    this.userSubject.next(usuarioFalso);
  }

  logout(){
    localStorage.removeItem('usuario');
    this.userSubject.next(null);

  }

  estaAutenticado(){
    return this.userSubject.value !== null;
  }

  private getUsuarioDesdeStorage(){
    const usuarioJson = localStorage.getItem('usuario');
    if(usuarioJson){
      return JSON.parse(usuarioJson);
    }
    return null;
  }

}
