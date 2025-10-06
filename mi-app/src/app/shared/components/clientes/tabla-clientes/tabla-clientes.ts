import {Component, inject} from '@angular/core';
import {ClientesService} from '../../../../services/clientes-service';
import {Cliente} from '../../../../models/cliente';

@Component({
  selector: 'app-tabla-clientes',
  imports: [],
  templateUrl: './tabla-clientes.html',
})
export class TablaClientes {
  // Inyecta el servicio de clientes usando la función inject (en lugar de constructor)
  clientesService: ClientesService = inject(ClientesService)

  // --- PROPIEDADES DEL COMPONENTE ---

  clientes: Cliente[] = [];         // Aquí se almacenará la lista completa de clientes cargados
  clientesPorPagina: Cliente[] = [];// Aquí solo los clientes de la página actual (para paginación)
  paginaActual: number = 1;         // Número de la página actual (comienza en 1)
  tamanoPagina: number = 10;        // Cantidad de clientes a mostrar por página


  // --- CICLO DE VIDA ---

  // ngOnInit es un hook de Angular que se ejecuta cuando el componente se inicializa
  ngOnInit(): void {
    // Llamamos a la función que carga los clientes desde el servicio
    this.cargarClientes();
  }

  // --- MÉTODOS PRINCIPALES ---

  // Carga los clientes desde el servicio y establece la primera página
  cargarClientes(): void {
    this.clientesService.getClientes().subscribe({
      next: (data) => {
        // Guardamos los clientes en la propiedad clientes
        this.clientes = data;
        // Mostramos la primera página por defecto
        this.cambiarPagina(1);
      },
      error: (err) => console.error('Error cargando clientes:', err) // Manejo de errores en la carga
    });
  }

  // Cambia la página actual y recalcula qué clientes se deben mostrar
  cambiarPagina(pagina: number): void {
    this.paginaActual = pagina;             // Actualiza el número de página actual
    const inicio = (pagina - 1) * this.tamanoPagina; // Índice inicial de clientes a mostrar
    const fin = inicio + this.tamanoPagina;          // Índice final de clientes a mostrar
    // Filtra el arreglo completo de clientes para obtener solo los de la página
    this.clientesPorPagina = this.clientes.slice(inicio, fin);
  }

  // Calcula el número total de páginas en función de los clientes y el tamaño de página
  paginasTotales(): number {
    return Math.ceil(this.clientes.length / this.tamanoPagina);
  }

  // Genera un arreglo con los números de página [1, 2, 3, ...] para iterar en el HTML
  paginasArray(): number[] {
    return Array.from({ length: this.paginasTotales() }, (_, i) => i + 1);
    // 👆 Usa Array.from para crear un array con tantos elementos como páginas haya
    // y les asigna los números de página empezando en 1.
  }

}
