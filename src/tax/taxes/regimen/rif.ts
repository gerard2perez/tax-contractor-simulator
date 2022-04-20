import { ISRTax, ISRTaxParams } from '../federal/isr'
import { rifRates } from '../tables/isr-rif'

export class NewRIF extends ISRTax {
  cedular (gravableIncome, amount: number) {
    return gravableIncome * amount * (1 - this.estimulo)
  }

  estimulo: number
  constructor (data: ISRTaxParams & { monthly: boolean; exercise: number }) {
    super(data)
    if (data.monthly) {
      this.add(...data.movements)
    }
    this.estimulo = (10 - data.exercise + 1) / 10
  }

  calculateTaxes () {
    this.findTaxStep(0)
    const { previewISR, gravableIncome, ...all } = this.prepareParameters()
    const isr = previewISR * (1 - this.estimulo)
    const salarioPercibido = gravableIncome - isr
    return {
      ...all,
      gravableIncome,
      salarioPercibido,
      salarioNormalizado: salarioPercibido,
      previewISR,
      isr,
      estimulo: this.estimulo
    }
  }

  TaxTable = rifRates
}
