import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CardComponent } from '../shared/components/card/card.component';
import { UsuarioInterface } from '../shared/interfaces/usuario.interface';
import { UsuarioService } from '../shared/services/usuario.service';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [FormsModule, CardComponent, CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss',
})
export class UsuariosComponent implements OnInit {
  textoPesquisa: string | undefined;
  listagemUsuarios: Array<{ titulo: string; imagem: string; rota: string }> =
    [];
  listagemUsuariosPesquisa: Array<{
    titulo: string;
    imagem: string;
    rota: string;
  }> = [];
  usuarios: Array<UsuarioInterface> = [];

  constructor(public usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe((retorno) => {
      retorno.forEach((usuario) => {
        this.listagemUsuarios.push({
          titulo: usuario.nome,
          imagem: 'assets/images/user.png',
          rota: `cadastro-usuario/${usuario.id}`,
        });
      });
      this.listagemUsuariosPesquisa = this.listagemUsuarios;
    });
  }

  pesquisar() {
    if (this.textoPesquisa) {
      this.listagemUsuariosPesquisa = this.listagemUsuarios.filter((usuario) =>
        usuario.titulo.toUpperCase().includes(this.textoPesquisa!.toUpperCase())
      );
    } else {
      this.listagemUsuariosPesquisa = this.listagemUsuarios;
    }
  }
}
