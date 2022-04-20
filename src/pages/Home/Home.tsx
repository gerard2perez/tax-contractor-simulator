import Button from '../../components/Button/Button'
import ScreenLine from '../../components/ScreenLine/ScreenLine'
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch'
import Screen from '../../containers/Screen/Screen'
import styles from './Home.scss'
import { KeyboardKeys } from './keyboard.kets'
import useSalaryUSD from './useSalaryUSD'

const App = () => {
  const {
    fullscreen,
    salary,
    mxInfo,
    taxInfo,
    UpdateSalary: handleClick
  } = useSalaryUSD({
    salary: 2000,
    salarioPercibido: 0
  })
  const toggleFullScreen = fullscreen ? 'X' : KeyboardKeys.fullscrean
  const keyBoard = [
    [7, 8, 9, null],
    [4, 5, 6, null],
    [1, 2, 3, null],
    [toggleFullScreen, 0, KeyboardKeys.delete, KeyboardKeys.equals]
  ]
  const lines = [
    { label: 'Gross Income', value: salary, currency: 'USD' },
    { label: 'Net Income', value: taxInfo.salarioPercibido, currency: 'USD' },
    { label: 'Mx Salary', value: mxInfo.income, currency: 'MXN', className: styles.BigLine }
    // { label: 'Mx Net Income', value: mxInfo.salarioPercibido, currency: 'MXN' },
    // { label: 'Mx Ben Income', value: mxInfo.salarioNormalizado, currency: 'MXN' }
  ]

  return (
    <>
    <div className={styles.App}>
      <ToggleSwitch/>
      <Screen>
        {lines.map(line => (
          <ScreenLine key={line.label} {...line} />
        ))}
      </Screen>
      <div className={styles.Keyboard}>
        {keyBoard.map(line => line.map(key => (
          <Button
            key={key}
            onClick={handleClick}
            value={key}/>
        )))
        }
      </div>
    </div>
    </>
  )
}

export default App
