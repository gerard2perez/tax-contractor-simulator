import { useEffect, useState } from 'react'
import Worker from '../web-workers/tax.worker.ts'
import { AppState } from './useInitialState'
const worker = new Worker()
const initialState = {
  usNet: 0,
  mxGross: 0,
  mxNet: 0,
  mxReal: 0
}
function useWorkerCalculator () {
  const [state, setState] = useState(initialState)
  useEffect(() => {
    worker.onmessage = (message) => {
      setState({ ...state, ...message.data })
    }
  }, [])
  const makeCalculations = (salary: number, state: AppState) => {
    worker.postMessage({ salary, ...state })
  }
  const resetCalculations = () => setState(initialState)
  return {
    state,
    resetCalculations,
    makeCalculations
  }
}
export { useWorkerCalculator }
