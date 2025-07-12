import { Routes } from '@angular/router';
import { ConocenosComponent } from './components/conocenos.component/conocenos.component';
import { HomeComponent } from './components/home.component/home.component';
import { QuienesSomosComponent } from './components/quienes-somos.component/quienes-somos.component';
import { ServiciosComponent } from './components/servicios.component/servicios.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Inicio',
        component: HomeComponent
    },
    {
        path: 'conocenos',
        title: 'Conocenos',
        component: ConocenosComponent
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
    }
];
