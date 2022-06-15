import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplicaPor'
})
export class MultiplicaPorPipe implements PipeTransform {

  transform(valor1: number, valor2: number): unknown {
    return valor1 * valor2;
  }

}
