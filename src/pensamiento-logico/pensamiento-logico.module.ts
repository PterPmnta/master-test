import { Module } from '@nestjs/common';
import { PensamientoLogicoService } from './pensamiento-logico.service';
import { PensamientoLogicoController } from './PensamientoLogicoController';

@Module({
  controllers: [PensamientoLogicoController],
  providers: [PensamientoLogicoService],
})
export class PensamientoLogicoModule { }
