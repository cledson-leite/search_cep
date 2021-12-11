export default class MissingCepError extends Error {
  constructor() {
    super('Missing CEP')
    this.name = 'MissingCepError'
  };
}