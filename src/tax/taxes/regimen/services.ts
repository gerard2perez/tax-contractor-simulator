import { ScalatedTaxes, TaxesDatabase } from '../../support/i-taxes-table'
import { ISRTax } from '../federal/isr'
import { TABLE } from '../tables/isr-services'

export class RegimenServicios extends ISRTax {
  cedular (gravableIncome: number, amount: number): number {
    return gravableIncome * amount
  }

  calculateTaxes () {
    const { gravableIncome, previewISR, ...all } = this.prepareParameters()
    const salarioNormalizado = gravableIncome - previewISR
    return {
      ...all,
      salarioPercibido: salarioNormalizado,
      salarioNormalizado,
      gravableIncome,
      previewISR,
      isr: previewISR
    }
  }

  TaxTable: TaxesDatabase<ScalatedTaxes> = TABLE
}
