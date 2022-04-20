/*
Copyright (C) 2022 Gerardo Pérez Pérez - All Rights Reserved
<gerard2perez@outlook.com>
Unauthorized copying of this file, via any medium is strictly prohibited 
Proprietary and confidential

File: boo-keeping.ts
Created:  2022-03-19T05:32:25.895Z
Modified: 2022-03-27T09:09:03.379Z
*/

import { Movement } from './movement'

export class BookKeeping {
    
    income = 0
    expenses = 0
    ivaOnFavor = 0
    ivaOnCharge = 0
    get gravableIncome () {
        return this.income - this.expenses
    }
    get facturated () {
        return this.income + this.ivaOnCharge
    }
    plus(right: Movement): BookKeeping {
        const ctrName = (right as any).constructor.name
        if(ctrName === 'Income') {
            this.ivaOnCharge += right.iva
            this.income += right.isr
        } else {
            this.ivaOnFavor += right.iva
            this.expenses += right.isr
        }
        return this
    }
}
