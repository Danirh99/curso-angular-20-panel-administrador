import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
})
export class Header {
  // @Input() define una propiedad que el componente padre puede pasar a este hijo
  @Input() sidebarCollapsed = false;

  // @Output() define un evento personalizado que este componente puede emitiar hacia el padre
  @Output() toggleSidebar = new EventEmitter<void>();

  // Método que se ejecuta cuando el usuario hace click en el botón
  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
}
