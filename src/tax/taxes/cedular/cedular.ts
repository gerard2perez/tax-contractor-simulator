/* eslint-disable no-useless-constructor */
import { DataStruct } from '../../support/i-taxes-table'
import { ISRTax } from '../federal/isr'
export type calculateTaxes<T extends ISRTax> = ReturnType<T['calculateTaxes']>

export abstract class Cedular<T extends ISRTax> {
    abstract TaxesTable: DataStruct<number>
    constructor (public regimen: ISRTax) {

    }

    calculateTaxes (): calculateTaxes<T> {
      const { gravableIncome, ...params } = this.regimen.prepareParameters()
      const cedular = gravableIncome * this.TaxesTable.get(this.regimen.year)
      return { ...params, cedular, gravableIncome } as unknown as calculateTaxes<T>
    }

    toString () {
      return this.regimen.toString()
    }
}
