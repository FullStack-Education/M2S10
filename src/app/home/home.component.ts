import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../shared/components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  listaAtividades = [
    {
      titulo: 'Calculadora',
      imagem: 'assets/images/atividade-1.png',
      rota: '/calculadora'
    },
    {
      titulo: 'Usuários',
      imagem: 'assets/images/atividade-2.png',
      rota: '/usuarios'
    },
    {
      titulo: 'Conversor Temperatura',
      imagem: 'assets/images/atividade-3.png',
      rota: '/conversor'
    },
    {
      titulo: 'Consulta CEP',
      imagem: 'assets/images/atividade-4.png',
      rota: '/consulta-cep'
    }
  ];
}
