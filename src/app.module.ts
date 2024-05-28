import { Module } from '@nestjs/common';
import { GoogleReposModule } from './google-repos/google-repos.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [GoogleReposModule, ConfigModule.forRoot(),],
  controllers: [],
  providers: [],
})
export class AppModule { }
