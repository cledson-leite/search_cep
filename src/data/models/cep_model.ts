import CepEntity from '../../domain/entities/cep_entity';

export default class CepModel extends CepEntity {
  constructor(
    cep: string,
    logradouro: string,
    complemento: string,
    bairro: string,
    localidade: string,
    uf: string
  ){
    super(
      cep = cep,
      logradouro = logradouro,
      complemento = complemento,
      bairro = bairro,
      localidade = localidade,
      uf = uf
    );
  };

  static from(data: any) {
    return new CepModel(
      data.cep,
      data.logradouro,
      data.complemento,
      data.bairro,
      data.localidade,
      data.uf
    )
  }
}