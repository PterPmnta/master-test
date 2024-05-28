import { Module } from '@nestjs/common';
import { GoogleReposService } from './google-repos.service';
import { GoogleReposController } from './google-repos.controller';

@Module({
  controllers: [GoogleReposController],
  providers: [GoogleReposService],
})
export class GoogleReposModule {}
