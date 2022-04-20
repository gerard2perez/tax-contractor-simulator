/*
Copyright (C) 2022 Gerardo Pérez Pérez - All Rights Reserved
<gerard2perez@outlook.com>
Unauthorized copying of this file, via any medium is strictly prohibited 
Proprietary and confidential

File: iva.ts
Created:  2022-03-19T05:16:57.509Z
Modified: 2022-03-19T05:33:01.518Z
*/

import { TaxesDatabase } from '../support/i-taxes-table'
export type IVASchema = [frontera: number, nacional: number, extranjero: number]
export const IVAData = new TaxesDatabase<IVASchema>([
    [1990, [[0.9, 0.14, 0]]],
    [2000, [[0.11, 0.16, 0]]]
])
export enum IVA {
    frontera,
    nacional,
    extranjero,
    no = 2,
}
