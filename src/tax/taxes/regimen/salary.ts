
import { Movement } from '../../book-keeping'
import { ISRTax, TaxParameters } from '../federal/isr'
import { TABLE } from '../tables/isr-salary.tables'
import { UMATable } from '../tables/uma'
const primaRiesgo = 0.005
function reduce (compundObject: any) {
  return Object.keys(compundObject).reduce((total: number, key: string) => {
    const data = compundObject[key]
    if (typeof data === 'object') {
      return total + reduce(data)
    }
    return total + data
  }, 0)
}
type IMSSConcepts = {
    /** Riesgo del trabajo */
    RiesgoTrabajo: number,
    EnfermedadMaternidad: {
        /** ENfermedad y Maternidad: */
        EyM: number,
        /** Enfermedad y Maternidad: Excedente */
        EyMEx: number,
        /** Enfermedad y Maternidad: Dinero */
        EyMD: number,
        /** Enfermedad y Maternidad: Gastos médicos para pensionados y beneficiarios */
        EyMP: number,

    },
    InvalidezVida: {
        Especie: number,
        Retiro: number
    },
    /** Retiro, Cesantía en Edad Avanzada y Vejez (CEAV) */
    RCEAV: {
        Retiro: number,
        CEAV: number
    },
    Infonavit: number,
    Guarderias: number
}
export class NewSalary extends ISRTax {
    TaxTable = TABLE
    diasAguinaldo = 15
    primaVacacional = 0.25
    diasVacaciones = 6
    cedular (gravableIncome: number, amount: number): number {
      return 0
    }

    constructor ({
      year = new Date().getFullYear(),
      diasAguinaldo = 15,
      primaVacacional = 0.25,
      diasVacaciones = 6,
      movements = [] as Movement[]
    }) {
      super({ year, movements })
      this.diasAguinaldo = diasAguinaldo
      this.primaVacacional = primaVacacional
      this.diasVacaciones = diasVacaciones
    }

    calculateTaxes () {
      const UMA = UMATable.get(this.year)
      const { facturated: salary } = this.bookKeeping
      const MAXSDI = 25 * UMA
      /** Salario Diario */
      const SD = salary / 30
      /** Factor de Integracion */
      const FI = (365 + this.diasAguinaldo + this.diasVacaciones * this.primaVacacional) / 365
      const primaVacacional = SD * this.primaVacacional * this.diasVacaciones
      /** Salario Diario Integrado */
      const SDI = SD * FI
      /** Salario Base Corizacion */
      const SBC = SDI > MAXSDI ? MAXSDI : SDI
      const aguinaldo = SD * this.diasAguinaldo
      const prima = SD * this.diasVacaciones * this.primaVacacional
      const dias = 30
      const empleador: IMSSConcepts = {
        RiesgoTrabajo: dias * SBC * primaRiesgo,
        EnfermedadMaternidad: {
          EyM: dias * UMA * 0.204,
          EyMEx: dias * (SBC - 3 * UMA > 0 ? (SBC - 3 * UMA) * 0.011 : 0),
          EyMD: dias * SBC * 0.007,
          EyMP: dias * SBC * 0.0105
        },
        InvalidezVida: {
          Especie: dias * SBC * 0.0175,
          Retiro: dias * SBC * 0.02
        },
        RCEAV: {
          Retiro: dias * SBC * 0.02 / 2,
          CEAV: dias * SBC * 0.03150 / 2
        },
        Infonavit: dias * SBC * 0.05 / 2,
        Guarderias: dias * SBC * 0.01
      }
      const trabajador: IMSSConcepts = {
        RiesgoTrabajo: 0,
        EnfermedadMaternidad: {
          EyM: 0,
          EyMEx: dias * (SBC - 3 * UMA > 0 ? (SBC - 3 * UMA) * 0.004 : 0),
          EyMD: dias * SBC * 0.0025,
          EyMP: dias * SBC * 0.00375
        },
        InvalidezVida: {
          Especie: dias * SBC * 0.00625,
          Retiro: dias * SBC * 0
        },
        RCEAV: {
          Retiro: 0,
          CEAV: dias * SBC * 0.01125 / 2
        },
        Infonavit: 0,
        Guarderias: 0
      }
      const imssTrabajador = reduce(trabajador)
      const imssPatron = reduce(empleador)

      const { previewISR, ...params } = this.prepareParameters()
      const isr = previewISR
      const salarioPercibido = salary - isr - imssTrabajador
      const salarioNormalizado = ((salary - isr + imssPatron) * 12 + aguinaldo + primaVacacional) / 12
      return {
        ...params,
        cedular: 0,
        impuestoCargo: 0,
        cuota: 0,
        previewISR,
        extra: {
          SDI,
          primaVacacional,
          SD,
          SBC,
          aguinaldo,
          prima,
          empleador,
          trabajador,
          imssPatron,
          imssTrabajador
        },
        isr,
        salarioPercibido,
        salarioNormalizado
      } as TaxParameters
    }
}
