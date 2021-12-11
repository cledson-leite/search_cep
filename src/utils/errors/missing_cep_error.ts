export class MissingCep extends Error {
  constructor(){
    super('Missing CEP');
    this.name = 'MissingCep'
  };
}