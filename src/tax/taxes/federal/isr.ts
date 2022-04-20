/*
Copyright (C) 2022 Gerardo Pérez Pérez - All Rights Reserved
<gerard2perez@outlook.com>
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential

File: isr.ts
Created:  2022-01-30T04:26:12.869Z
Modified: 2022-04-19T19:59:06.910Z
*/

import { BookKeeping, Movement } from '../../book-keeping'
import { ScalatedTaxes, TaxesDatabase } from '../../support/i-taxes-table'
export interface TaxParameters<T = any> {
  rate: number;
  marginalTax: number;
  excedentLI: number;
  facturated: number;
  income: number;
  outcome: number;
  isr: number;
  gravableIncome: number;
  previewISR: number;
  salarioNormalizado: number;
  salarioPercibido: number;
  cedular: number;
  impuestoCargo: number;
  inferior: number;
  cuota: number;
  extra: T;
  others: {
    superior: number;
    tblSprd: number[];
  };
}
export type ISRTaxParams = {
  year?: number;
  movements: Movement[];
}
export abstract class ISRTax {
  abstract TaxTable: TaxesDatabase
  public bookKeeping: BookKeeping
  public year: number
  cedular (gravableIncome: number, amount: number): number {
    return gravableIncome * amount
  }

  abstract calculateTaxes(): TaxParameters
  constructor ({ year = new Date().getFullYear(), movements }: ISRTaxParams) {
    this.year = year
    this.bookKeeping = Movement.calculate(movements)
  }

  add (...movements: Movement[]) {
    movements.forEach((mov) => this.bookKeeping.plus(mov))
  }

  protected limitCondition (
    [inferior, superior]: ScalatedTaxes,
    utility: number
  ) {
    return utility >= inferior && utility < superior
  }

  findTaxStep (gravableIncome: number) {
    return this.TaxTable.find(this.year).thatMatches((d) =>
      this.limitCondition(d, gravableIncome)
    ) ?? this.TaxTable.find(this.year).data[0]
  }

  /** This can be overide */
  prepareParameters (): TaxParameters {
    const {
      income,
      gravableIncome,
      expenses: outcome,
      facturated
    } = this.bookKeeping
    const [inferior, superior, cuota, rate, ...tblSprd] = this.findTaxStep(
      gravableIncome
    ) as unknown as number[]
    const excedentLI = gravableIncome - inferior
    const marginalTax = excedentLI * (rate / 100)
    const previewISR = marginalTax + cuota
    return {
      salarioNormalizado: 0,
      salarioPercibido: 0,
      isr: 0,
      cedular: 0,
      impuestoCargo: 0,
      facturated,
      income,
      outcome,
      gravableIncome,
      previewISR,
      marginalTax,
      inferior,
      cuota,
      rate,
      excedentLI,
      others: {
        superior,
        tblSprd
      },
      extra: {}
    }
  }
}
