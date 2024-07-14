import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ConversorComponent } from './conversor/conversor.component';
import { usuarioLogadoGuard } from './shared/guards/usuario-logado.guard';
import { ConsultaCepComponent } from './consulta-cep/consulta-cep.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [usuarioLogadoGuard]
  },
  {
    path: 'calculadora',
    component: CalculadoraComponent,
    canActivate: [usuarioLogadoGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'consulta-cep',
    component: ConsultaCepComponent
  },
  {
    path: 'conversor',
    component: ConversorComponent,
    canActivate: [usuarioLogadoGuard]
  },
  {
    path: 'usuarios',
    canActivate: [usuarioLogadoGuard],
    children: [
      {
        path: '',
        component: UsuariosComponent
      },
      {
        path: 'cadastro-usuario',
        component: CadastroUsuarioComponent
      },
      {
        path: 'cadastro-usuario/:id',
        component: CadastroUsuarioComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];
