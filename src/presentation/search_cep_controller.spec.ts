import { throws } from 'assert'
import CepEntity from '../domain/entities/cep_entity'
import { cepEntityFake } from '../domain/mocks/cep_model_fake'
import ISearchCep from '../domain/usecases/search_cep'
import { InvalidCep, MissingCep, NotFoundCep, ServerError } from '../utils/errors/missing_cep_error'
import SearchCepUsecaseStub from './mocks/search_cep_usecase_stub'
import SearchCepController from './search_cep_controller'
import ICEPValidator from './validator/i_cep_validator'
import { CEPValidatorStub } from './validator/mocks/cep_validator_stub'

interface SutTypes {
  sut: SearchCepController,
  validator: ICEPValidator,
  usecase: ISearchCep
}

const makeSut = (): SutTypes => {
  const validator = new CEPValidatorStub()
  const usecase = new SearchCepUsecaseStub()
  const sut = new SearchCepController(validator, usecase)
  return { sut, validator, usecase }
}

describe('SearchCepController', () => {
  it('Should return 400 if no cep is provided', async () => {
    //produz os dados do teste
    const {sut} = makeSut()
    const cep: string = ''

    //operacionar esses dados
    const result = await sut.search(cep)

    //verificar resultado esperado
    expect(result.statusCode).toBe(400)
    expect(result.data).toEqual(new MissingCep())

  })
  it('Should return 400 if an invalid cep is provided', async () => {
    //produz os dados do teste
    const {sut, validator} = makeSut()
    const cep: string = 'invalidCEP'
    jest.spyOn(validator, 'isValid').mockReturnValueOnce(false)

    //operacionar esses dados
    const result = await sut.search(cep)

    //verificar resultado esperado
    expect(result.statusCode).toBe(400)
    expect(result.data).toEqual(new InvalidCep())

  })
  
  it('Should call validator with correct cep', async () => {
    //produz os dados do teste
    const {sut, validator} = makeSut()
    const cep: string = '12345678'
    
    //operacionar esses dados
    const isValidSpy = jest.spyOn(validator, 'isValid')
    await sut.search(cep)
    
    //verificar resultado esperado
    expect(isValidSpy).toHaveBeenCalledWith(cep)
    
  })
  it('Should return 500 if validator throws', async () => {
    //produz os dados do teste
    const { sut, validator } = makeSut()
    jest.spyOn(validator, 'isValid').mockImplementationOnce(() => { throw new Error()})

    const cep: string = 'invalidCEP'

    //operacionar esses dados
    const result = await sut.search(cep)

    //verificar resultado esperado
    expect(result.statusCode).toBe(500)
    expect(result.data).toEqual(new ServerError())

  })
  it('Should call usecase with correct cep', async () => {
    //produz os dados do teste
    const { sut, usecase } = makeSut()
    const cep: string = '12345678'

    //operacionar esses dados
    const usecaseSpy = jest.spyOn(usecase, 'search')
    await sut.search(cep)

    //verificar resultado esperado
    expect(usecaseSpy).toHaveBeenCalledWith(cep)

  })
  it('Should return 500 if usecase throws', async () => {
    //produz os dados do teste
    const { sut, usecase } = makeSut()
    jest.spyOn(usecase, 'search').mockImplementationOnce(() => { throw new Error() })

    const cep: string = 'invalidCEP'

    //operacionar esses dados
    const result = await sut.search(cep)

    //verificar resultado esperado
    expect(result.statusCode).toBe(500)
    expect(result.data).toEqual(new ServerError())

  })
  it('Should return 404 if usecase return CepEntity empty', async () => {
    //produz os dados do teste
    const { sut, usecase } = makeSut()
    jest.spyOn(usecase, 'search')
      .mockResolvedValueOnce(new CepEntity(undefined, undefined, undefined, undefined, undefined, undefined))

    const cep: string = 'notFoundCEP'

    //operacionar esses dados
    const result = await sut.search(cep)

    //verificar resultado esperado
    expect(result.statusCode).toBe(404)
    expect(result.data).toEqual(new NotFoundCep())

  })
  it('Should return 200 if cep is provided', async () => {
    //produz os dados do teste
    const { sut } = makeSut()
    const cep: string = '12345678'

    //operacionar esses dados
    const result = await sut.search(cep)

    //verificar resultado esperado
    expect(result.statusCode).toBe(200)
    expect(result.data).toEqual(cepEntityFake)

  })

})