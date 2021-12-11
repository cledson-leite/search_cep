import CepValidator from './cep_validator'

describe('CepValidator', () => {
  it('Should return false if cep is invalid', () => {
    //produz os dados do teste
    const sut = new CepValidator()
    const cep = 'invalidCep'
    
    //operacionar esses dados
    const isValid = sut.isValid(cep)
    

    //verificar resultado esperado
    expect(isValid).toBeFalsy()
    
  })
})