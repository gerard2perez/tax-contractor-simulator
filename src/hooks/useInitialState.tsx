import { useState } from 'react'
import { useFullScreen } from './useFullScreen'
// export type AppState = {

//   usdMode: boolean
//   MedicalInsurance: boolean
//   DentalInsurance: boolean
//   SightInsurance: boolean
//   LifeInsurance: boolean
//   Aguinaldo: number
//   Prima: number
//   Vacations: number
// }
const initialState = {
  usdMode: true,
  MedicalInsurance: true,
  DentalInsurance: false,
  SightInsurance: false,
  LifeInsurance: false,
  PantryVouchers: false,
  SavingsFunds: false,
  ProductivityBonus: false,
  Aguinaldo: 30,
  PaidVacations: 30,
  SundayPremium: 25,
  VacationsBonus: 25,
  RestDays: 2
}
export type AppState = typeof initialState
export type Benefits = Omit<AppState, 'usdMode'>
const useInitialState = () => {
  const { fullScreen, toggleFullScreen } = useFullScreen()
  const [state, setState] = useState(initialState)
  const toggleMode = () => setState({ ...state, usdMode: !state.usdMode })
  const toggleBenefit = (benefit) => {
    const [key] = Object.keys(benefit)
    setState({ ...state, [key]: !benefit[key] })
  }
  return { ...state, toggleMode, toggleBenefit, fullScreen, toggleFullScreen }
}

export default useInitialState
export type ApplicationContext = ReturnType<typeof useInitialState>
