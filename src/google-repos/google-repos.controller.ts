import { Controller, Get } from '@nestjs/common';
import { GoogleReposService } from './google-repos.service';

@Controller('google-repos')
export class GoogleReposController {
  constructor(private readonly googleReposService: GoogleReposService) { }


  @Get()
  getBestRepos() {
    return this.googleReposService.getBestRepos();
  }

}
