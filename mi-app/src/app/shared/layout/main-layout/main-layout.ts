import {RouterOutlet} from '@angular/router';
import {Component} from '@angular/core';
import {Footer} from '../footer/footer';
import {Header} from '../header/header';
import {Sidebar} from '../sidebar/sidebar';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Footer, Header, Sidebar],
  templateUrl: './main-layout.html',
})
export class MainLayout {
  isSidebarCollapsed = false;

  onToggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
