import ClientResponse from '../data/client_response';
import { InvalidCep, MissingCep, ServerError } from '../utils/errors/missing_cep_error';
import { badRequest, serverError } from './helpers/requests';
import ISearchCepController from './i_search_cep_controller';
import ICEPValidator from './validator/i_cep_validator';

export default class SearchCepController implements ISearchCepController {
  private readonly validator: ICEPValidator

  constructor(validator: ICEPValidator) {
    this.validator = validator
  };
  
  search(cep: String): ClientResponse {

    try {
      if (!cep.trim()) return badRequest(new MissingCep())

    const isValid = this.validator.isValid(cep)
      if (!isValid) return badRequest(new InvalidCep())
    } catch (err) {
      return serverError(new ServerError())
    }
  }

}