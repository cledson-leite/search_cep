import ClientResponse from '../data/client_response';
import MissingCepError from '../utils/errors/missing_cep_error';

export default class SearchCep {
  search(cep: number): ClientResponse {
    return {
      statusCode: 400,
      data: new MissingCepError()
    }
  }
}