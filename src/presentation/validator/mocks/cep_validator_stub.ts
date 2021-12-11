import ICEPValidator from '../i_cep_validator';

export class CEPValidatorStub implements ICEPValidator {
  isValid(cep: String): boolean {
    return true
  }
}

export class CEPValidatorStubThrow implements ICEPValidator {
  isValid(cep: String): boolean {
    throw new Error()
  }
}