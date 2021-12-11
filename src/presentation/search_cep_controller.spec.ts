import { MissingCep } from '../utils/errors/missing_cep_error'
import SearchCepController from './search_cep_controller'

describe('SearchCepController', () => {
  it('Should return 400 if no cep is provided', () => {
    //produz os dados do teste
    const sut = new SearchCepController()
    const cep: number = 12345678

    //operacionar esses dados
    const result = sut.search(cep)

    //verificar resultado esperado
    expect(result.statusCode).toBe(400)
    expect(result.data).toEqual(new MissingCep())

  })
})