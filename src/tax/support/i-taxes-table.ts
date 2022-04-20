type  DATA<T>  = [year: number, data: T]
export class DataStruct<T> {
    
    constructor(private data: DATA<T>[]) {

    }

    get(year: number) {
        return this.data.sort().reverse().find(d => year >= d[0])[1]
    }
}
export type ScalatedTaxes = [...data: number[]]
type  TaxDatabase<T extends ScalatedTaxes = ScalatedTaxes>  = [year: number, data: T[]]
class TaxTable<T extends ScalatedTaxes = ScalatedTaxes> {
    data: T[]
    year: number
    constructor(taxes: TaxDatabase<T>) {
        this.data = taxes[1]
        this.year = taxes[0]
    }
    thatMatches( fn: (taxLine: T) => boolean ) {
        return this.data.find(data => fn(data))
    }
}
export class TaxesDatabase<T extends ScalatedTaxes = ScalatedTaxes> {
    tables: TaxTable<T>[]
    constructor(data: TaxDatabase<T>[]) {
        this.tables = data.sort((a, b) => b[0] - a[0]).map(table => new TaxTable(table))
    }
    find(year: number) {
        return this.tables.find(d => year >= d.year)
    }

}