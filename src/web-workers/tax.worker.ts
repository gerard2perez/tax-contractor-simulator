/* eslint-disable no-unused-vars */
import type { AppState, Benefits } from '../hooks/useInitialState'
import { Income } from '../tax/book-keeping'
import { NEWGTOCedular } from '../tax/taxes/cedular/gto-cedular'
import { NewSalary } from '../tax/taxes/regimen/salary'
import { RegimenServicios } from '../tax/taxes/regimen/services'
function calcAditionals (benefits: Benefits) {
  let spiceIncome = 0
  if (benefits.MedicalInsurance) {
    spiceIncome += 30000 / 12
  }
  if (benefits.LifeInsurance) {
    spiceIncome += 450
  }
  if (benefits.DentalInsurance) {
    spiceIncome += 3000 / 12
  }
  if (benefits.SightInsurance) {
    spiceIncome += 6000 / 12
  }
  return spiceIncome
}
function findMxSalary (salary: number, salarioPercibido: number, benefits: Benefits) {
  let money = salary
  const target = salarioPercibido
  let compareInfo: ReturnType<NEWGTOCedular<NewSalary>['calculateTaxes']> = {} as any
  let salarioNormalizado = 0
  const extra = calcAditionals(benefits)
  do {
    compareInfo = new NEWGTOCedular(new NewSalary({
      diasAguinaldo: benefits.Aguinaldo,
      diasVacaciones: benefits.PaidVacations,
      primaVacacional: benefits.VacationsBonus / 100,
      movements: [new Income(money)]
    })).calculateTaxes()
    salarioNormalizado = compareInfo.salarioNormalizado + extra
    money -= 1
  } while (target < salarioNormalizado)
  console.log({ extra, salarioPercibido, compareInfo })
  return {
    mxGross: compareInfo.income,
    mxNet: compareInfo.salarioPercibido,
    mxReal: compareInfo.salarioNormalizado,
    mxExtra: (compareInfo.salarioNormalizado - compareInfo.salarioPercibido) + extra
  }
}
function calculate ({ data }) {
  const { salary, usdMode, ...incoming } = data as AppState & {salary: number}
  if (salary > 0) {
    const income = new NEWGTOCedular(new RegimenServicios({
      movements: [new Income(salary)]
    }))
    const data = income.calculateTaxes()
    console.log(data)
    const mxData = findMxSalary(salary, data.salarioPercibido, incoming)
    console.log(mxData)
    self.postMessage({
      usNet: data.salarioPercibido,
      ...mxData
    })
  } else {
    self.postMessage({})
  }
}
self.addEventListener('message', calculate)
