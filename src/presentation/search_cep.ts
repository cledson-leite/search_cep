import ClientResponse from '../data/client_response';
import { MissingCep } from '../utils/errors/missing_cep_error';
import { badRequest } from './helpers/requests';

export default class SearchCep {
  search(cep: number): ClientResponse {
    return badRequest(new MissingCep())
  }
}