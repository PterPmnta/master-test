import { BadRequestException, Injectable } from '@nestjs/common';
import { error } from 'console';

@Injectable()
export class PensamientoLogicoService {

  getAllOddNumbers(limite: number) {
    try {
      const impares = this.getOddNumber(limite);
      const resultado = [];
      for (let numero of impares) {
        resultado.push(numero);
      }

      return resultado;
    } catch (error) {
      throw error('El valor enviado no es un numero');
    }
  }

  * getOddNumber(limite: number) {
    for (let inicio = 1; inicio <= limite; inicio += 2) {
      yield inicio;
    }
  }
}
