import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {
  expressao = '';

  tratarSelecao(param: string) {
    this.expressao += param;
  }

  calcularResultado() {
    this.expressao = eval(this.expressao);
  }

  limpar() {
    this.expressao = '';
  }
}
