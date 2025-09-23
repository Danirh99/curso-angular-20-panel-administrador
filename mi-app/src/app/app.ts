import {Component, signal} from '@angular/core';
import {MainLayout} from './shared/layout/main-layout/main-layout';

@Component({
  selector: 'app-root',
  imports: [MainLayout],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('mi-app');
}
