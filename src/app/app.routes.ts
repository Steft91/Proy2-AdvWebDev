import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component/home.component';
import { QuienesSomosComponent } from './components/sections/quienes-somos.component/quienes-somos.component';
import { ServiciosComponent } from './components/sections/servicios.component/servicios.component';
import { FormularioComponent } from './components/sections/formulario.component/formulario.component';
import { EquipoComponent } from './components/sections/equipo.component/equipo.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Inicio',
        component: HomeComponent
    },
    {
        path: 'empresa',
        title: 'Quienes Somos',
        component: QuienesSomosComponent
    },
    {
        path: 'servicios',
        title: 'Servicios',
        component: ServiciosComponent
    },
    {
        path: 'equipo',
        title: 'Nuestro Equipo',
        component: EquipoComponent
    },
    {
        path: 'formulario',
        title: 'Contacto',
        component: FormularioComponent
    }
];
