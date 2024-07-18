import { Routes } from '@angular/router';

import { usuarioLogadoGuard } from './shared/guards/usuario-logado.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(c => c.HomeComponent),
    canActivate: [usuarioLogadoGuard]
  },
  {
    path: 'calculadora',
    loadComponent: () => import('./calculadora/calculadora.component').then(c => c.CalculadoraComponent),
    canActivate: [usuarioLogadoGuard]
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then(c => c.LoginComponent),
  },
  {
    path: 'consulta-cep',
    loadComponent: () => import('./consulta-cep/consulta-cep.component').then(c => c.ConsultaCepComponent),
    canActivate: [usuarioLogadoGuard]
  },
  {
    path: 'conversor',
    loadComponent: () => import('./conversor/conversor.component').then(c => c.ConversorComponent),
    canActivate: [usuarioLogadoGuard]
  },
  {
    path: 'usuarios',
    canActivate: [usuarioLogadoGuard],
    children: [
      {
        path: '',
        loadComponent: () => import('./usuarios/usuarios.component').then(c => c.UsuariosComponent),
      },
      {
        path: 'cadastro-usuario',
        loadComponent: () => import('./cadastro-usuario/cadastro-usuario.component').then(c => c.CadastroUsuarioComponent),
      },
      {
        path: 'cadastro-usuario/:id',
        loadComponent: () => import('./cadastro-usuario/cadastro-usuario.component').then(c => c.CadastroUsuarioComponent),
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
