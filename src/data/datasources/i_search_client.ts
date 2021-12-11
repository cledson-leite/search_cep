import CepModel from '../models/cep_model';

export default interface ISearchClient {
  get(cep: string): Promise<CepModel> 
}