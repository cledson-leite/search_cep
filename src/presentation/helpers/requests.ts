import ClientResponse from '../../data/client_response';

export const badRequest = (error: Error): ClientResponse => ({
  statusCode: 400,
  data: error
})