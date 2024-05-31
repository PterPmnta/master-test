import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleReposService {

  async getBestRepos() {
    try {

      const dataObtenida = this.requestRepositories();

      return dataObtenida;
    } catch (error) {
      throw new error('Error fetching repositories:', error)
    }
  }

  async requestRepositories() {

    const urlBase = `https://api.github.com/users`;
    const userData = `${process.env.GITHUB_USER}/repos`;
    const pageOptions = `per_page=${process.env.PER_PAGE}&page=`;

    const fullURL = `${urlBase}/${userData}?${pageOptions}`
    const headers = { Authorization: `token ${process.env.GITHUB_TOKEN}` }

    let page = 1;
    let reposTotales = []
    const maxPaginasPorLote = 5;

    try {

      while (true) {
        const agruparPromesas = [];
        for (let inicio = 0; inicio < maxPaginasPorLote; inicio++) {
          agruparPromesas.push(fetch(fullURL + (page + inicio), { headers }));
        }

        const promesasObtenidas = await Promise.all(agruparPromesas);

        let loteRepositorio = [];

        for (const promesa of promesasObtenidas) {
          if (!promesa.ok) {
            throw new Error(`Error: ${promesa.status}`);
          }
          const repo = await promesa.json();
          loteRepositorio = loteRepositorio.concat(repo);
        }

        reposTotales = reposTotales.concat(loteRepositorio);

        page += maxPaginasPorLote;

        if (loteRepositorio.length < 100 * maxPaginasPorLote) {
          break;
        }
      }

      reposTotales = reposTotales
        .sort((first_repo, second_repo) => second_repo.stargazers_count - first_repo.stargazers_count)
        .slice(0, 10);

      return reposTotales;

    } catch (error) {
      throw new error('Error fetching repositories:', error)
    }
  }
}
