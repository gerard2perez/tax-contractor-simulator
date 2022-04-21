import { useState } from 'react'
import { NEWGTOCedular } from '../../tax/taxes/cedular/gto-cedular'
import { NewSalary } from '../../tax/taxes/regimen/salary'
import { RegimenServicios } from '../../tax/taxes/regimen/services'
// import WorkerBuilder from '../../web-worker'
import { KeyboardKeys } from './keyboard.keys'

export type Taxes = ReturnType<NEWGTOCedular<RegimenServicios>['calculateTaxes']>
export type Taxes2 = ReturnType<NEWGTOCedular<NewSalary>['calculateTaxes']>

function useSalaryUSD (initialState) {
  const [salary, setSalary] = useState(initialState.salary)
  const [taxInfo, setTaxInfo] = useState<Taxes>(initialState)
  const [mxInfo, setMxInfo] = useState<Taxes2>(initialState)
  const appendNumberToSalary = (event?: string | number | null) => {
    if (salary > 100000 && event !== KeyboardKeys.delete) return
    let newState = salary.toString()
    switch (event) {
      case KeyboardKeys.delete:
        newState = newState.substring(0, newState.length - 1) || '0'
        setTaxInfo({
          ...taxInfo,
          salarioPercibido: 0
        })
        setMxInfo({
          ...mxInfo,
          income: 0
        })
        break
      default:
        newState = `${newState}${event}`
        break
    }
    // console.log(newState, state)
    setSalary(parseFloat(newState))
  }
  return {
    salary,
    mxInfo,
    taxInfo,
    appendNumberToSalary,
    setSalary
  }
}
export default useSalaryUSD
