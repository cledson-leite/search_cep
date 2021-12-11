import ISearchClient from '../datasources/i_search_client';
import SearchClientStub from '../mocks/search_client_stub'
import SearchCepRepository from './search_cep_repository';

interface SutTypes {
  datasource: ISearchClient
  sut: SearchCepRepository,
}

const makeSut = (): SutTypes => {
  const datasource = new SearchClientStub()
  const sut = new SearchCepRepository(datasource);

  return { sut, datasource}
}

describe('SearchCepRepository', () => {
  it('Should calls datasource with correct values', async () => {
    //produz os dados do teste
    const { sut, datasource } = makeSut()
    const getSpy = jest.spyOn(datasource, 'get')
    const cep = '12345678'

    //operacionar esses dados
    await sut.search(cep)
    
    //verificar resultado esperado
    expect(getSpy).toHaveBeenCalledWith(cep)
    
  })
})