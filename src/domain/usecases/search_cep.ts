import CepEntity from '../entities/cep_entity';

export default interface ISearchCep {
  search(cep: string): Promise<CepEntity>
}