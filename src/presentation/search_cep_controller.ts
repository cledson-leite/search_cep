import ClientResponse from '../data/client_response';
import { MissingCep } from '../utils/errors/missing_cep_error';
import { badRequest } from './helpers/requests';
import ISearchCepController from './i_search_cep_controller';

export default class SearchCepController implements ISearchCepController {
  search(cep: number): ClientResponse {
    return badRequest(new MissingCep())
  }
}