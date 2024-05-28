import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleReposService {

  async getBestRepos() {
    try {

      const dataReturned = this.requestRepositories();

      return dataReturned;
    } catch (error) {
      throw new error('Error fetching repositories:', error)
    }
  }

  async requestRepositories() {
    const url = `https://api.github.com/users/${process.env.GITHUB_USER}/repos?per_page=100&page=`;
    const headers = { Authorization: `token ${process.env.GITHUB_TOKEN}` }
    let page = 1;
    let repos = []
    try {

      while (true) {
        const response = await fetch(url + page, { headers });
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const repo = await response.json();

        repos = repos.concat(repo)
          .sort((first_repo, second_repo) => second_repo.stargazers_count - first_repo.stargazers_count)
          .slice(0, 10)

        if (repo.length < 100) {
          break;
        }
        page++;
      }

      return repos;

    } catch (error) {
      throw new error('Error fetching repositories:', error)
    }
  }
}
