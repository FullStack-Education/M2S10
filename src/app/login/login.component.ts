import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../shared/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login = {
    email: '',
    senha: ''
  };

  constructor(private loginService: LoginService, private router: Router) {}

  entrar() {
    if(this.login.email && this.login.senha) {
      this.loginService.login(this.login);
      window.alert('Usuario logado');
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 500);
    } else {
      window.alert('Por favor, preencha os campos');
    }
  }

  cadastrar() {
    console.log('Clicou em Cadastrar');
  }
}
