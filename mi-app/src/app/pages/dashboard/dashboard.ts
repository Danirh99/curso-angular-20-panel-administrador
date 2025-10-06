import { Component } from '@angular/core';
import {GraficaClientes} from '../../shared/components/clientes/grafica-clientes/grafica-clientes';
import {TablaClientes} from '../../shared/components/clientes/tabla-clientes/tabla-clientes';

@Component({
  selector: 'app-dashboard',
  imports: [GraficaClientes, TablaClientes],
  templateUrl: './dashboard.html',
})
export class Dashboard {

}
