import ClientResponse from '../data/repository/client_response';

export default interface ISearchCepController {
  search(cep: string): Promise<ClientResponse>
}