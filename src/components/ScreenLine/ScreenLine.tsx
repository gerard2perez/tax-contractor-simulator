import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import { ClickAwayListener, Tooltip } from '@mui/material'
import { useContext, useState } from 'react'
import AppContext from '../../context/AppContext'
import styles from './ScreenLine.scss'
type Props = {
  label: string
  value: number
  tooltip?: string
  className?: string
}
const ScreenLine = ({ label, value, className, tooltip }: Props) => {
  const { usdMode } = useContext(AppContext)
  const formated = new Intl.NumberFormat([
    'en-GB'
    // 'es-MX'
  ], {
    style: 'currency',
    currency: usdMode ? 'USD' : 'MXN'
  }).format(value)
  const [open, setOpen] = useState(false)
  const handleTooltipOpen = () => {
    setOpen(true)
  }
  const handleTooltipClose = () => {
    setOpen(false)
  }
  if (tooltip) {
    return (
      <ClickAwayListener onClickAway={handleTooltipClose}>
        <Tooltip
          title={tooltip}
          placement="top"
          open={open}
        >
          <div
            className={`${styles.ScreenLine} ${className}`}
          >
            <h2>{label}:</h2>
            <h3>{formated}</h3>
            <HelpOutlineIcon onClick={handleTooltipOpen} />
          </div>
        </Tooltip>
      </ClickAwayListener>
    )
  } else {
    return (
      <div
        className={`${styles.ScreenLine} ${className}`}
      >
        <h2>{label}:</h2>
        <h3>{formated}</h3>
      </div>
    )
  }
}

export default ScreenLine
