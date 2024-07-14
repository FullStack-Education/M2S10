import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conversorTemperatura',
  standalone: true
})
export class ConversorTemperaturaPipe implements PipeTransform {

  transform(valorTemperatura: string, tipoConversao: string): unknown {
    if (tipoConversao === 'C') {
      return (parseInt(valorTemperatura) - 32) / 1.8;
    } else if (tipoConversao === 'F') {
      return +valorTemperatura * 1.8 + 32;
    }
    return null;
  }

}
