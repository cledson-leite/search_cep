import ClientResponse from '../data/client_response';

export default class SearchCep {
  search(cep: number): ClientResponse {
    return {
      statusCode: 400,
      data: new Error('Missing cep')
    }
  }
}