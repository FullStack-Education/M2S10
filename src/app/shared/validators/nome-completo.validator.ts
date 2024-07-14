import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function nomeCompleto(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    const valor: string = control.value;

    if (valor.split(' ').length < 2) {
      return { nomeCompleto: true };
    }

    if (valor.split(' ')[0].length < 3 || valor.split(' ')[1].length < 3) {
      return { nomeCompleto: true };
    }

    console.log(control);

    return null;
  };
}
