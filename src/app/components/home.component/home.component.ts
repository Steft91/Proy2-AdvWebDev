import { Component } from '@angular/core';
import { InicioComponent } from '../inicio.component/inicio.component';
import { MetricasComponent } from '../metricas.component/metricas.component';
import { CarruselEmpresasComponent } from '../carrusel-empresas.component/carrusel-empresas.component';

@Component({
  selector: 'app-home-component',
  imports: [InicioComponent,MetricasComponent,CarruselEmpresasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
