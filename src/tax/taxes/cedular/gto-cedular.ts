import { ISRTax } from '../federal/isr'
import { GTCTable } from '../tables/cedular/isr-guanajauto.cedular'
import { calculateTaxes, Cedular } from './cedular'

export class NEWGTOCedular<T extends ISRTax> extends Cedular<T> {
    TaxesTable = GTCTable
    constructor (public regimen: T) {
      super(regimen)
    }

    calculateTaxes (): calculateTaxes<T> {
      const { isr, gravableIncome, previewISR, salarioNormalizado: SN, salarioPercibido: SP, ...params } = this.regimen.calculateTaxes()
      const cedular = this.regimen.cedular(gravableIncome, GTCTable.get(this.regimen.year))
      const impuestoCargo = isr + cedular
      const salarioNormalizado = SN - cedular
      const salarioPercibido = SP - cedular
      return {
        ...params,
        isr,
        salarioNormalizado,
        salarioPercibido,
        impuestoCargo,
        previewISR,
        gravableIncome,
        cedular
      } as unknown as any
    }
}
