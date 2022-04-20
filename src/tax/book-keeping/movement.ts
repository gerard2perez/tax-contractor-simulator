import { BookKeeping } from './boo-keeping'
import { IVA, IVAData } from './iva'

/*
Copyright (C) 2022 Gerardo Pérez Pérez - All Rights Reserved
<gerard2perez@outlook.com>
Unauthorized copying of this file, via any medium is strictly prohibited 
Proprietary and confidential

File: movement.ts
Created:  2022-03-19T05:16:40.890Z
Modified: 2022-03-19T07:00:11.147Z
*/
export abstract class Movement {
    public iva: number
    public isr: number
    constructor(protected amount: number, protected ivaKind: IVA, year = new Date().getFullYear()) {
        this.isr = amount / (1+IVAData.find(year).data[0][ivaKind])
        this.iva = amount - this.isr
    }
    static calculate(movements: Movement[]) {
        return movements.reduce((prev, curr) => prev.plus(curr), new BookKeeping())
    }
}
