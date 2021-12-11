import ISearchClient from '../datasources/i_search_client';
import CepModel from '../models/cep_model';
import { clientResponseFake } from './client_response_fake';

export default class SearchClientStub implements ISearchClient {
  async get(cep: string): Promise<CepModel> {
    return Promise.resolve(CepModel.from(clientResponseFake))
  }
}