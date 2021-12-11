import ClientResponse from '../data/client_response';
import ISearchCep from '../domain/usecases/search_cep';
import { InvalidCep, MissingCep, ServerError } from '../utils/errors/missing_cep_error';
import { badRequest, ok, serverError } from './helpers/requests';
import ISearchCepController from './i_search_cep_controller';
import ICEPValidator from './validator/i_cep_validator';

export default class SearchCepController implements ISearchCepController {
  private readonly validator: ICEPValidator
  private readonly usecase: ISearchCep

  constructor(
    validator: ICEPValidator,
    usecase: ISearchCep
  ) {
    this.validator = validator
    this.usecase = usecase
  };
  
  async search(cep: string): Promise<ClientResponse> {

    try {
      if (!cep.trim()) return badRequest(new MissingCep())

      const isValid = this.validator.isValid(cep)
      if (!isValid) return badRequest(new InvalidCep())

      const data = await this.usecase.search(cep)

      return ok(data)
    } catch (err) {
      return serverError(new ServerError())
    }
  }

}