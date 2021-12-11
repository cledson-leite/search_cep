import ClientResponse from '../data/client_response';
import { MissingCep } from '../utils/errors/missing_cep_error';

export default class SearchCep {
  search(cep: number): ClientResponse {
    return {
      statusCode: 400,
      data: new MissingCep()
    }
  }
}