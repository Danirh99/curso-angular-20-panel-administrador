import { BaseChartDirective } from 'ng2-charts';
import { ChartType, ChartConfiguration, ChartOptions } from 'chart.js';
import {AfterViewInit, Component, inject, ViewChild} from '@angular/core';
import {ClientesService} from '../../../../services/clientes-service';
import {Cliente} from '../../../../models/cliente';

@Component({
  selector: 'app-grafica-clientes',
  imports: [BaseChartDirective],
  templateUrl: './grafica-clientes.html',
})
export class GraficaClientes implements AfterViewInit {
  // Inyecta el servicio de clientes sin usar constructor (API moderna de Angular)
  clientesService = inject(ClientesService);

  // @ViewChild obtiene una referencia al componente del gráfico en el DOM
  // Esto nos permite llamar a métodos como chart.update() para refrescar los datos.
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  // Etiquetas para el eje X (meses)
  barChartLabels: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

  // Tipo de gráfico: en este caso barras
  chartType: ChartType = 'bar';

  // Configuración de datos del gráfico
  chartData: ChartConfiguration['data'] = {
    labels: this.barChartLabels, // Asigna las etiquetas de los meses
    datasets: [
      {
        label: 'Clientes por Mes', // Título de la serie
        data: [],                  // Comienza vacío, se llenará dinámicamente
        backgroundColor: '#3b82f6',// Color de las barras
      }
    ]
  };

  // Opciones del gráfico (ejes, responsive, etc.)
  chartOptions: ChartOptions = {
    responsive: true,  // Se ajusta al tamaño del contenedor
    scales: {
      x: {},           // Configuración del eje X (en blanco usa defaults)
      y: {
        beginAtZero: true,   // Comienza en 0
        ticks: { stepSize: 1 }, // Marca cada número de 1 en 1
      }
    }
  };

  // Hook del ciclo de vida: se llama cuando la vista está inicializada
  // Aquí ya existe el canvas, por eso es buen momento para cargar datos
  ngAfterViewInit(): void {
    this.cargarDatosGrafico();
  }

  // Metodo que carga los datos de clientes y los pasa al gráfico
  cargarDatosGrafico(): void {
    // Llama al servicio y se suscribe al observable de clientes
    this.clientesService.getClientes().subscribe({
      next: (clientes: Cliente[]) => {
        // Inicializa arreglo con 0 para cada mes
        const conteoMeses = new Array(this.barChartLabels.length).fill(0);

        // Recorre los clientes y cuenta cuántos se registraron en cada mes
        clientes.forEach(cliente => {
          const fecha = new Date(cliente.fechaRegistro);
          const mes = fecha.getMonth(); // getMonth() devuelve 0 para enero
          if (mes >= 0 && mes < conteoMeses.length) conteoMeses[mes]++;
        });

        // Asigna el arreglo de conteos al dataset del gráfico
        this.chartData.datasets[0].data = conteoMeses;

        // Actualiza el gráfico para que se redibuje con los nuevos datos
        if (this.chart) this.chart.update();
      },
      // Manejo de error en caso de que no se pueda cargar el JSON
      error: (err) => console.error('Error cargando clientes para gráfico:', err)
    });
  }
}
