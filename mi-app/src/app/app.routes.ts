import { Clientes } from './pages/clientes/clientes';
import { Dashboard } from './pages/dashboard/dashboard';
import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Usuarios } from './pages/usuarios/usuarios';
import { NotFound } from './pages/errors/not-found/not-found';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'login', component: Login },
  { path: 'usuarios', component: Usuarios },
  {
    path: 'clientes',
    component: Clientes,
  },
  { path: '**', component: NotFound },
];

export const navRoutes = [
  {
    path: '/dashboard',
    label: 'Dashboard',
  },
  {
    path: '/usuarios',
    label: 'Usuarios',
  },
  {
    path: '/clientes',
    label: 'Clientes',
  },
];
