import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { LabelErroDirective } from '../shared/directives/label-erro.directive';
import { UsuarioInterface } from '../shared/interfaces/usuario.interface';
import { UsuarioService } from '../shared/services/usuario.service';
import { nomeCompleto } from '../shared/validators/nome-completo.validator';

@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, LabelErroDirective],
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.scss',
})
export class CadastroUsuarioComponent implements OnInit {
  formCadastro!: FormGroup;
  idUsuario: string | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.idUsuario = this.activatedRoute.snapshot.params['id'];

    this.formCadastro = new FormGroup({
      nome: new FormControl('', [Validators.required, nomeCompleto()]),
      cpf: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      celular: new FormControl('', Validators.required),
    });

    if (this.idUsuario) {
      this.usuarioService.getUsuario(this.idUsuario).subscribe((retorno) => {
        if (retorno) {
          this.formCadastro.patchValue(retorno);
        }
      });
    }
  }

  submitForm() {
    if (this.formCadastro.valid) {
      if (this.idUsuario) {
        this.editar(this.formCadastro.value);
      } else {
        this.cadastrar(this.formCadastro.value);
      }
    } else {
      this.formCadastro.markAllAsTouched();
    }
  }

  cadastrar(usuario: UsuarioInterface) {
    this.usuarioService.postUsuario(usuario).subscribe((retorno) => {
      window.alert('Usuário criado com sucesso');
    });
  }

  editar(usuario: UsuarioInterface) {
    usuario.id = this.idUsuario!;
    this.usuarioService.putUsuario(usuario).subscribe((retorno) => {
      window.alert('Usuário editado com sucesso');
    });
  }
}
