import BackspaceIcon from '@mui/icons-material/Backspace'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { useContext, useEffect, useState } from 'react'
import ScreenLine from '../../components/ScreenLine/ScreenLine'
import Screen from '../../containers/Screen/Screen'
import AppContext from '../../context/AppContext'
import { useWorkerCalculator } from '../../hooks/useWorkerCalculator'
import styles from './Home.scss'
import { KeyboardKeys } from './keyboard.keys'
import useSalaryUSD from './useSalaryUSD'
function w (value, key, { handler, props }: any) {
  return {
    c: <Button
        {...props}
        className={styles.InnerButton}
        onClick={() => handler(key)
      }>
        {value}
      </Button>,
    k: key || value
  }
}
function transform<T> (usMode: boolean, data: T) {
  return Object.keys(data).reduce((res, key) => {
    res[key] = data[key] / (usMode ? 20 : 1)
    return res
  }, {}) as T
}
const App = () => {
  const { usdMode, toggleMode, toggleBenefit, fullScreen, toggleFullScreen, ...ctx } = useContext(AppContext)
  const {
    salary,
    appendNumberToSalary: us,
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
    us(event)
  }
  const { usNet, mxGross, mxReal, mxNet } = transform(usdMode, state)
  const ri = () => _ri(usdMode ? salary * 20 : salary, { usdMode, ...ctx })
  const m = (icon, key, handler, variant, color) => w(icon, key, { handler, props: { color, variant } })
  const x = (icon, key) => m(icon, key, onDelete, 'contained', 'error')
  const n = (value) => m(value, value, us, undefined, undefined)
  const s = (icon, key) => m(icon, key, ri, 'contained', 'success')
  const keyBoard = [
    n(7), n(8), n(9),
    n(4), n(5), n(6),
    n(1), n(2), n(3),
    s(<DragHandleIcon/>, 'd'), n(0), x(<BackspaceIcon/>, KeyboardKeys.delete)
  ]

  const lines = [
    { label: 'Gross Income', value: salary, currency: 'USD' },
    { label: 'US Net Income', value: usNet, currency: 'USD' },
    { label: 'Mx Gross Salary', value: mxGross, currency: 'MXN', className: styles.BigLine },
    { label: 'Mx Net Income', value: mxNet, currency: 'USD' },
    { label: 'Mx Real Income', value: mxReal, currency: 'USD' }
  ]
  return (
    <Paper elevation={5} sx={{
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      background: 'linear-gradient(-45deg, #121212, #3c3b3b)',
      margin: '20px'
    }}>
      <Screen >
        {lines.map(line => (
          <ScreenLine key={line.label} {...line} />
        ))}
      </Screen>
      <Paper elevation={10}>
      <Grid container spacing={0}>
        {keyBoard.map(({ c, k }) => (
          <Grid className={styles.ButtonSpace} item xs={4} key={`key-id-${k}`}>
            {c}
          </Grid>
        ))}
      </Grid>
      </Paper>
    </Paper>
  )
}

export default App
