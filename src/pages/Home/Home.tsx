import Paper from '@mui/material/Paper'
import { useContext, useEffect, useState } from 'react'
import ScreenLine from '../../components/ScreenLine/ScreenLine'
import Keyboard from '../../containers/Keyboard/Keyboard'
import Screen from '../../containers/Screen/Screen'
import AppContext from '../../context/AppContext'
import useSalaryUSD from '../../hooks/useSalaryUSD'
import { useWorkerCalculator } from '../../hooks/useWorkerCalculator'
import styles from './Home.scss'
function transform<T> (usMode: boolean, data: T) {
  return Object.keys(data).reduce((res, key) => {
    res[key] = data[key] / (usMode ? 20 : 1)
    return res
  }, {}) as T
}
const Home = () => {
  const {
    usdMode,
    fullScreen,
    toggleMode,
    toggleBenefit,
    toggleFullScreen,
    ...ctx
  } = useContext(AppContext)
  const {
    salary,
    appendNumberToSalary: onKey,
    setSalary
  } = useSalaryUSD({ salary: 0 })
  const {
    state,
    makeCalculations: _ri,
    resetCalculations
  } = useWorkerCalculator()
  const [reset, setReset] = useState(false)

  useEffect(() => {
    if (!usdMode) {
      setSalary(salary * 20)
    } else {
      setSalary(salary / 20)
    }
  }, [usdMode])
  useEffect(() => {
    if (reset) {
      console.log('reset Effect')
      // if (state.usNet > 0) {
      resetCalculations()
      setReset(false)
    }
    // }
  }, [salary])
  const onDelete = event => {
    setReset(true)
    onKey(event)
  }
  const { usNet, mxGross, mxReal, mxNet, mxExtra } = transform(usdMode, state)
  const onEnter = () => _ri(usdMode ? salary * 20 : salary, { usdMode, ...ctx })

  const lines = [
    { label: 'Contractor Income', value: salary },
    { label: 'Contractor Net Income', value: usNet },
    { label: 'Gross Salary', value: mxGross, className: styles.BigLine, tooltip: 'Required Salary (+benefits) that matches the contractor net income.' },
    { label: 'Net Salary', value: mxNet, tooltip: 'The money in you pocket' },
    { label: 'Benefits+', value: mxExtra, tooltip: 'All the extra money that you receive in benefits' }
  ]
  return (
    <Paper elevation={5} sx={{
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      background: 'linear-gradient(-45deg, #121212, #3c3b3b)'
    }}>
      <Screen >
        {lines.map(line => (
          <ScreenLine key={line.label} {...line} />
        ))}
      </Screen>
      <Keyboard
        onKey={onKey}
        onDelete={onDelete}
        onEnter={onEnter}
        />
    </Paper>
  )
}

export default Home
