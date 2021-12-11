import ClientResponse from '../../data/client_response';

export const badRequest = (error: Error): ClientResponse => ({
  statusCode: 400,
  data: error
})

export const serverError = (error: Error): ClientResponse => ({
  statusCode: 500,
  data: error
})