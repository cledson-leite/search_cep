import ClientResponse from '../data/client_response';

export default interface ISearchCepController {
  search(cep: string): ClientResponse
}