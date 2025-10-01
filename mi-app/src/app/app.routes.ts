import {Routes} from '@angular/router';
import {Dashboard} from './pages/dashboard/dashboard';
import {Login} from './pages/login/login';
import {Usuarios} from './pages/usuarios/usuarios';
import {Clientes} from './pages/clientes/clientes';
import {NotFound} from './pages/errors/not-found/not-found';
import {AuthGuard} from './guards/auth-guard';

export const routes: Routes = [
  { path: '', component: Dashboard, canActivate: [AuthGuard] },
  { path: 'dashboard', component: Dashboard, canActivate: [AuthGuard] },
  { path: 'login', component: Login },
  { path: 'usuarios', component: Usuarios, canActivate: [AuthGuard] },
  { path: 'clientes', component: Clientes, canActivate: [AuthGuard] },
  { path: '**', component: NotFound },
];

export const navRoutes = [
  { path: '/dashboard', label: 'Dashboard'},
  { path: '/login', label: 'Login'},
  { path: '/usuarios', label: 'Usuarios'},
  { path: '/clientes', label: 'Clientes'},
]
