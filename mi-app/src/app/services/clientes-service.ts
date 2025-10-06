import { Injectable, inject } from '@angular/core';
// Importamos HttpClient para leer el archivo JSON con llamada HTTP simulada
import { HttpClient } from '@angular/common/http';
// Importamos Observable para trabajar con datos asíncronos
import { Observable } from 'rxjs';
import {Cliente} from '../models/cliente';


@Injectable({
  providedIn: 'root' // Permite que el servicio sea singleton y accesible en toda la app
})

export class ClientesService {

  // Ruta al archivo JSON local con datos mock
  private dataUrl = 'src/assets/data/clientes.json';

  // Inyectamos HttpClient en el constructor para usarlo en métodos HTTP
  private http = inject(HttpClient);


  // PRIMERO DEFINIR EL MODELO
  // Mtodo que devuelve observable con lista de clientes leyendo el JSON
  getClientes(): Observable<Cliente[]> {
    // HttpClient get devuelve un observable del tipo que indicamos (Cliente[])
    return this.http.get<Cliente[]>(this.dataUrl);
  }

  // En el futuro aquí se agregarán métodos CRUD que hagan llamadas reales al backend
}
