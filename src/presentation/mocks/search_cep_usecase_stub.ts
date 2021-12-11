import { cepModel } from '../../data/mocks/cep_model_fake';
import CepEntity from '../../domain/entities/cep_entity';
import ISearchCep from '../../domain/usecases/search_cep';

export default class SearchCepUsecaseStub implements ISearchCep {
  search(cep: string): CepEntity {
    return cepModel
  }
}