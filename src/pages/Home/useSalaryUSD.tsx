import { useEffect, useState } from 'react'
import { Income } from '../../tax/book-keeping'
import { NEWGTOCedular } from '../../tax/taxes/cedular/gto-cedular'
import { NewSalary } from '../../tax/taxes/regimen/salary'
import { RegimenServicios } from '../../tax/taxes/regimen/services'
import { KeyboardKeys } from './keyboard.kets'
export type Taxes = ReturnType<NEWGTOCedular<RegimenServicios>['calculateTaxes']>
export type Taxes2 = ReturnType<NEWGTOCedular<NewSalary>['calculateTaxes']>
function useFullScreen () {
  const [fullscreen, setFullScreen] = useState(false)
  const toggleFullScreen = () => {
    // eslint-disable-next-line no-case-declarations
    const element = document.getElementById('app')
    if (fullscreen) {
      // @ts-ignore
      const cancellFullScreen = document.exitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen || document.msExitFullscreen
      cancellFullScreen.call(document)
      setFullScreen(false)
    } else {
      // @ts-ignore
      const requestFullScreen = element.requestFullscreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen
      requestFullScreen.call(element)
      setFullScreen(!fullscreen)
    }
  }
  return { fullscreen, toggleFullScreen }
}
function useSalaryUSD (initialState) {
  const { fullscreen, toggleFullScreen } = useFullScreen()
  const [salary, setSalary] = useState(initialState.salary)
  const [taxInfo, setTaxInfo] = useState<Taxes>(initialState)
  const [mxInfo, setMxInfo] = useState<Taxes2>(initialState)
  const UpdateSalary = (event?: string | number | null) => {
    if (salary > 100000 && event !== KeyboardKeys.delete) return
    let newState = salary.toString()
    switch (event) {
      case KeyboardKeys.delete:
        newState = newState.substring(0, newState.length - 1) || '0'
        break
      case KeyboardKeys.fullscrean:
        toggleFullScreen()
        break
      default:
        newState = `${newState}${event}`
        break
    }
    // console.log(newState, state)
    setSalary(parseFloat(newState))
  }
  useEffect(() => {
    if (salary > 0) {
      const income = new NEWGTOCedular(new RegimenServicios({
        movements: [new Income(salary * 20)]
      }))
      const data = income.calculateTaxes()

      setTaxInfo({
        ...taxInfo,
        salarioPercibido: data.salarioPercibido / 20
      })
    } else {
      setTaxInfo({
        ...taxInfo,
        salarioPercibido: 0
      })
    }
  }, [salary])
  useEffect(() => {
    let money = salary * 20
    const target = taxInfo.salarioPercibido * 20
    let compareInfo: ReturnType<NEWGTOCedular<NewSalary>['calculateTaxes']> = {} as any
    do {
      compareInfo = new NEWGTOCedular(new NewSalary({
        movements: [new Income(money)]
      })).calculateTaxes()
      money -= 10
    } while (target < compareInfo.salarioNormalizado)
    setMxInfo({
      ...mxInfo,
      income: compareInfo.salarioPercibido,
      salarioPercibido: compareInfo.salarioPercibido,
      salarioNormalizado: compareInfo.salarioNormalizado
    })
  }, [taxInfo])
  return {
    salary,
    mxInfo,
    taxInfo,
    UpdateSalary,
    fullscreen,
    toggleFullScreen
  }
}
export default useSalaryUSD
