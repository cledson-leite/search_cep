import MissingCepError from '../utils/errors/missing_cep_error'
import SearchCep from './search_cep'

describe('SearchCep', () => {
  it('Should return 400 if no cep is provided', () => {
    //produz os dados do teste
    const sut = new SearchCep()
    const cep: number = 12345678

    //operacionar esses dados
    const result = sut.search(cep)
    
    //verificar resultado esperado
    expect(result.statusCode).toBe(400)
    expect(result.data).toEqual(new MissingCepError())
    
  })
})