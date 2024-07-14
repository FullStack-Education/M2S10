import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConversorTemperaturaPipe } from '../shared/pipes/conversor-temperatura.pipe';

@Component({
  selector: 'app-conversor',
  standalone: true,
  imports: [FormsModule, CommonModule, ConversorTemperaturaPipe],
  templateUrl: './conversor.component.html',
  styleUrl: './conversor.component.scss'
})
export class ConversorComponent {
  valorTemperatura = '';
  opcaoSelecionada = '';
}
