/* eslint-disable no-unused-vars */
import type { AppState } from '../hooks/useInitialState'
import { Income } from '../tax/book-keeping'
import { NEWGTOCedular } from '../tax/taxes/cedular/gto-cedular'
import { NewSalary } from '../tax/taxes/regimen/salary'
import { RegimenServicios } from '../tax/taxes/regimen/services'

function findMxSalary (salary: number, salarioPercibido: number) {
  let money = salary
  const target = salarioPercibido
  let compareInfo: ReturnType<NEWGTOCedular<NewSalary>['calculateTaxes']> = {} as any
  do {
    compareInfo = new NEWGTOCedular(new NewSalary({
      movements: [new Income(money)]
    })).calculateTaxes()
    money -= 1
  } while (target < compareInfo.salarioNormalizado)
  return {
    mxGross: compareInfo.income,
    mxNet: compareInfo.salarioPercibido,
    mxReal: compareInfo.salarioNormalizado
  }
}
function calculate ({ data }) {
  const { salary, usdMode, ..._incomming } = data as AppState & {salary: number}

  if (salary > 0) {
    const income = new NEWGTOCedular(new RegimenServicios({
      movements: [new Income(salary)]
    }))
    const data = income.calculateTaxes()
    const mxData = findMxSalary(salary, data.salarioPercibido)
    self.postMessage({
      usNet: data.salarioPercibido,
      ...mxData
    })
  } else {
    self.postMessage({})
  }
}
self.addEventListener('message', calculate)
