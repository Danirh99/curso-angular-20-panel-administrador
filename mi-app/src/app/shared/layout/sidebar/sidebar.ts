import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.html',
})
export class Sidebar {
  @Input() isCollapsed = false;

  // getter que devuelve clases CSS dinámicamente en función de la propiedad isCollapsed
  get sidebarClasses() {
    return this.isCollapsed ? 'w-16' : 'w-64';
  }

  get titleClasses() {
    return this.isCollapsed ? 'opacity-0 w-0' : 'opacity-100';
  }
}
