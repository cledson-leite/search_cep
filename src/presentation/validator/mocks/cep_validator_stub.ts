import ICEPValidator from '../i_cep_validator';

export class CEPValidatorStub implements ICEPValidator {
  isValid(cep: String): boolean {
    return true
  }
}