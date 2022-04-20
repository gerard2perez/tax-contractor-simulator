import { TaxesDatabase } from '../../support/i-taxes-table'
import { MAX_INCOME } from './max-income'

type RIFRecord  = [inferior: number, superior: number, fixed: number, percentage: number]
export const rifRates = new TaxesDatabase<RIFRecord>([
    [2021, [
        [0.01, 1289.16, 0, 1.92],
        [1289.17, 10941.84, 24.76, 6.4],
        [10941.85, 19229.32, 642.52, 10.88],
        [19229.33, 22353.24, 1544.20, 16],
        [22353.25, 26762.94, 2044.02, 17.92],
        [26762.95, 53977, 2834.24, 21.36],
        [53977.01, 85075.16, 8647.16, 23.52],
        [85075.17, 162422.50, 15961.46, 30],
        [162422.51, 216563.34, 39165.66, 32],
        [216563.35, 649690.02, 56490.72, 34],
        [649690.03, MAX_INCOME, 203753.80, 35],
    ]]
])