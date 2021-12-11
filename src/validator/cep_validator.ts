export default class CepValidator {
  isValid(cep: String): boolean {
    const cepRaw = cep.replace(/\D/g, '').trim()
    if (cepRaw.length <= 0) return false
    const cepRegex = /^[0-9]{8}$/
    return cepRegex.test(cepRaw)
  }
}