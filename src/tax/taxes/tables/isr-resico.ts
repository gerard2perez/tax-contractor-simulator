/*
Copyright (C) 2022 Gerardo Pérez Pérez - All Rights Reserved
<gerard2perez@outlook.com>
Unauthorized copying of this file, via any medium is strictly prohibited
Proprietary and confidential

File: isr-resico.ts
Created:  2022-03-19T05:42:02.973Z
Modified: 2022-04-19T18:56:41.542Z
*/

import { TaxesDatabase } from "../../support/i-taxes-table";

export type RESICOTable2022 = [limit: number, percentage: number];
export const resicoRates = new TaxesDatabase<RESICOTable2022>([
  [
    2022,
    [
      [25000, 1],
      [50000, 1.1],
      [83333.33, 1.5],
      [208333.33, 2],
      [3500000, 2.5],
    ],
  ],
]);
