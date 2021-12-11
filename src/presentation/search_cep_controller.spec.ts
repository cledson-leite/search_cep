import { InvalidCep, MissingCep } from '../utils/errors/missing_cep_error'
import SearchCepController from './search_cep_controller'
import ICEPValidator from './validator/i_cep_validator'

class CEPValidatorStub implements ICEPValidator{
  isValid(cep: String): boolean {
    return true
  }
}

interface SutTypes {
  sut: SearchCepController,
  validator: ICEPValidator
}

const makeSut = (): SutTypes => {
  const validator = new CEPValidatorStub()
  const sut = new SearchCepController(validator)
  return {sut, validator}
}

describe('SearchCepController', () => {
  it('Should return 400 if no cep is provided', () => {
    //produz os dados do teste
    const {sut} = makeSut()
    const cep: String = ''

    //operacionar esses dados
    const result = sut.search(cep)

    //verificar resultado esperado
    expect(result.statusCode).toBe(400)
    expect(result.data).toEqual(new MissingCep())

  })
  it('Should return 400 if an invalid cep is provided', () => {
    //produz os dados do teste
    const {sut, validator} = makeSut()
    const cep: String = 'invalidCEP'
    jest.spyOn(validator, 'isValid').mockReturnValueOnce(false)

    //operacionar esses dados
    const result = sut.search(cep)

    //verificar resultado esperado
    expect(result.statusCode).toBe(400)
    expect(result.data).toEqual(new InvalidCep())

  })
  it('Should call validator with correct cep', () => {
    //produz os dados do teste
    const {sut, validator} = makeSut()
    const cep: String = '12345678'
    
    //operacionar esses dados
    const isValidSpy = jest.spyOn(validator, 'isValid')
    sut.search(cep)

    //verificar resultado esperado
    expect(isValidSpy).toHaveBeenCalledWith(cep)

  })
})