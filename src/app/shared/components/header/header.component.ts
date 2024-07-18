import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { ContadorService } from '../../services/contador.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  usuarioLogado!: {email: string, senha: string};
  contador = 0;

  constructor(private loginService: LoginService, private contadorService: ContadorService) {
    this.usuarioLogado = this.loginService.usuarioLogado;

    this.contadorService.contador.subscribe(valor => {
      this.contador = valor;
    });
  }
}
