import cep_entity from '../../domain/entities/cep_entity';
import ISearchCep from '../../domain/usecases/search_cep';
import ISearchClient from '../datasources/i_search_client';

export default class SearchCepRepository implements ISearchCep{
  constructor(private readonly datasource: ISearchClient) {
    this.datasource = datasource
  };
  async search(cep: string): Promise<cep_entity> {
    const result = await this.datasource.get(cep)
    return result
  }
}