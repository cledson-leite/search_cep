import ClientResponse from '../../data/repository/client_response';
import CepEntity from '../../domain/entities/cep_entity';

export const badRequest = (error: Error): ClientResponse => ({
  statusCode: 400,
  data: error
})
export const notFound = (error: Error): ClientResponse => ({
  statusCode: 404,
  data: error
})

export const serverError = (error: Error): ClientResponse => ({
  statusCode: 500,
  data: error
})

export const ok = (data: CepEntity): ClientResponse => ({
  statusCode: 200,
  data: data
})