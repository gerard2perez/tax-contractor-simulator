import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import styles from './ScreenLine.scss'
type Props = {
  label: string
  value: number
  className?: string
  currency?: string
}
const ScreenLine = ({ label, value, className, currency }: Props) => {
  const { usdMode } = useContext(AppContext)
  const formated = new Intl.NumberFormat([
    'en-GB'
    // 'es-MX'
  ], {
    style: 'currency',
    currency: usdMode ? 'USD' : 'MXN'
  }).format(value)
  return (
    <div
      className={`${styles.ScreenLine} ${className}`}
    >
      <h2>{label}:</h2>
      <h3>{formated}</h3>
    </div>
  )
}

export default ScreenLine
