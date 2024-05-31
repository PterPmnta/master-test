import { Module } from '@nestjs/common';
import { GoogleReposModule } from './google-repos/google-repos.module';
import { ConfigModule } from '@nestjs/config';
import { PensamientoLogicoModule } from './pensamiento-logico/pensamiento-logico.module';

@Module({
  imports: [ConfigModule.forRoot(), GoogleReposModule, PensamientoLogicoModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
