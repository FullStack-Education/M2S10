import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  usuarioLogado!: {email: string, senha: string};

  constructor() { }

  login(usuario: {email: string, senha: string}) {
    sessionStorage.setItem('usuarioLogado', JSON.stringify(usuario));
    this.usuarioLogado = usuario;
  }

  logout() {
    sessionStorage.removeItem('usuarioLogado');
  }
}
