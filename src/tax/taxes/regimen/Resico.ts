/*
Copyright (C) 2022 Gerardo Pérez Pérez - All Rights Reserved
<gerard2perez@outlook.com>
Unauthorized copying of this file, via any medium is strictly prohibited 
Proprietary and confidential

File: Resico.ts
Created:  2022-03-19T05:41:12.546Z
Modified: 2022-03-19T07:00:16.087Z
*/

import { ScalatedTaxes } from '../../support/i-taxes-table'
import { ISRTax, TaxParameters } from '../federal/isr'
import { resicoRates } from '../tables/isr-resico'

export class RESICORegimen extends ISRTax {
    TaxTable = resicoRates
    cedular(gravableIncome: number, amount: number): number {
        const { others: {superior} } = this.prepareParameters()
        return gravableIncome * amount * superior/100
    }
    protected limitCondition([limit]: ScalatedTaxes, utility: number): boolean {
        return utility <= limit
    }
    calculateTaxes(): TaxParameters {
        const { gravableIncome, inferior, others, ...rest } = this.prepareParameters()
        const cuota = others.superior
        const salarioNormalizado = gravableIncome * (1 - cuota/100)
        const isr = gravableIncome * cuota / 100
        const previewISR = isr
        return {...rest, others, previewISR, isr, gravableIncome, inferior, salarioNormalizado, salarioPercibido: salarioNormalizado }
    }
    
}