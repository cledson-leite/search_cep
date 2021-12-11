export default class SearchCep {
  search(cep: number): any {
    return { statusCode: 400, data: new Error('Missing cep')}
  }
}