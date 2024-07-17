import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {
  contador = new BehaviorSubject(0);

  adicionarContador() {
    let valorContador = this.contador.getValue();
    this.contador.next(valorContador + 1);
  }

  subtrairContador() {
    let valorContador = this.contador.getValue();
    this.contador.next(valorContador - 1);
  }

  resetarContador() {
    this.contador.next(0);
  }
}
