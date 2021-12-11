export default class CepEntity {
  constructor(
    readonly cep: string,
    readonly logradouro: string,
    readonly complemento: string,
    readonly bairro: string,
    readonly localidade: string,
    readonly uf: string
  ) { };
}