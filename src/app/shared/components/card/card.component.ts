import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContadorService } from '../../services/contador.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() elemento: {
    titulo: string,
    rota: string,
    imagem: string
  } | undefined;

  constructor(private contadorService: ContadorService) {}

  adicionarContador() {
    this.contadorService.adicionarContador();
  }
}
