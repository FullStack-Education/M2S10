import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  usuarioLogado!: {email: string, senha: string};

  constructor(private loginService: LoginService) {
    this.usuarioLogado = this.loginService.usuarioLogado;
  }
}
