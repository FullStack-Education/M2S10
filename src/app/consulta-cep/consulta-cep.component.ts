import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { CepService } from '../shared/services/cep.service';

@Component({
  selector: 'app-consulta-cep',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './consulta-cep.component.html',
  styleUrl: './consulta-cep.component.scss',
})
export class ConsultaCepComponent implements OnInit {
  formCep!: FormGroup;

  constructor(private cepService: CepService) {}

  ngOnInit(): void {
    this.formCep = new FormGroup({
      cep: new FormControl(''),
      logradouro: new FormControl(''),
      numero: new FormControl(''),
      complemento: new FormControl(''),
      bairro: new FormControl(''),
      localidade: new FormControl(''),
      uf: new FormControl(''),
    });
  }

  buscarCep() {
    if (this.formCep.value.cep) {
      this.cepService.buscarCep(this.formCep.value.cep).subscribe({
        next: (retorno) => {
          if ((retorno as any).erro) {
            window.alert('CEP digitado inválido');
          } else {
            this.formCep.patchValue(retorno);
          }
        },
        error: (err) => {
          window.alert('Ocorreu um erro ao buscar o CEP digitado');
          console.log(err);
        },
      });
    }
  }
}
