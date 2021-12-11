import ICEPValidator from '../i_cep_validator';

export class CEPValidatorStub implements ICEPValidator {
  isValid(cep: string): boolean {
    return true
  }
}