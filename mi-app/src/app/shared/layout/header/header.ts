import {Component, EventEmitter, inject, Input, Output} from '@angular/core';
import {Auth} from '../../../services/auth';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from '../../../models/user';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    AsyncPipe
  ],
  templateUrl: './header.html',
})
export class Header {
  user$: Observable<User | null>;

  // @Input() define una propiedad que el componente padre puede pasar a este hijo
  @Input() sidebarCollapsed = false;

  // @Output() define un evento personalizado que este componente puede emitiar hacia el padre
  @Output() toggleSidebar = new EventEmitter<void>();

  constructor(private auth: Auth, private router: Router) {
    this.user$ = this.auth.user$;
  }

  // Método que se ejecuta cuando el usuario hace click en el botón
  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  onLogout(){
    this.auth.logout();
    this.router.navigate(['login']);
  }
}
