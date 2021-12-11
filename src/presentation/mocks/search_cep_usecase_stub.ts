import { cepEntityFake } from '../../data/mocks/cep_model_fake';
import CepEntity from '../../domain/entities/cep_entity';
import ISearchCep from '../../domain/usecases/search_cep';

export default class SearchCepUsecaseStub implements ISearchCep {
  async search(cep: string): Promise<CepEntity> {
    return Promise.resolve(cepEntityFake)
  }
}