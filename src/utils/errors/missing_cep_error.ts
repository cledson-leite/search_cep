export class MissingCep extends Error {
  constructor(){
    super('Missing CEP');
    this.name = 'MissingCep'
  };
}

export class InvalidCep extends Error {
  constructor(){
    super('Invalid CEP');
    this.name = 'InvalidCep'
  };
}

export class NotFoundCep extends Error {
  constructor(){
    super('Not found CEP');
    this.name = 'NotFoundCep'
  };
}
export class ServerError extends Error {
  constructor(){
    super('Unexpected failure. Please try later...');
    this.name = 'ServerError'
  };
}