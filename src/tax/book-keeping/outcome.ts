/*
Copyright (C) 2022 Gerardo Pérez Pérez - All Rights Reserved
<gerard2perez@outlook.com>
Unauthorized copying of this file, via any medium is strictly prohibited 
Proprietary and confidential

File: income.ts
Created:  2022-03-19T05:16:25.721Z
Modified: 2022-03-26T06:44:20.282Z
*/

import { IVA } from './iva'
import { Movement } from './movement'

export class Outcome extends Movement {
    constructor(amount: number, iva: IVA = IVA.extranjero) {
        super(amount, iva)
    }
}