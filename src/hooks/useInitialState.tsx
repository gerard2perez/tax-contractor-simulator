import { useState } from 'react'
export type AppState = {

  usdMode: boolean
  MedicalInsurance: boolean
  DentalInsurance: boolean
  SightInsurance: boolean
  LifeInsurance: boolean
  Aguinaldo: number
  Prima: number
  Vacations: number
}
const initialState: AppState = {
  usdMode: true,
  MedicalInsurance: true,
  DentalInsurance: false,
  SightInsurance: false,
  LifeInsurance: false,
  Aguinaldo: 30,
  Prima: 25,
  Vacations: 30
}

const useInitialState = () => {
  const [state, setState] = useState(initialState)
  const toggleMode = () => setState({ ...state, usdMode: !state.usdMode })
  return { ...state, toggleMode }
}

export default useInitialState
export type ApplicationContext = ReturnType<typeof useInitialState>
