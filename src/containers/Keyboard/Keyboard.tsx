import BackspaceIcon from '@mui/icons-material/Backspace'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { KeyboardKeys } from './keyboard.keys'
import styles from './Keyboard.scss'

type Props = {
  onEnter: any
  onKey: any
  onDelete: any
}
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
function Keyboard ({ onEnter, onDelete, onKey }: Props) {
  const m = (icon, key, handler, variant, color) => w(icon, key, { handler, props: { color, variant } })
  const x = (icon, key) => m(icon, key, onDelete, 'contained', 'error')
  const n = (value) => m(value, value, onKey, undefined, undefined)
  const s = (icon, key) => m(icon, key, onEnter, 'contained', 'success')
  const keyBoard = [
    n(7), n(8), n(9),
    n(4), n(5), n(6),
    n(1), n(2), n(3),
    s(<DragHandleIcon/>, 'd'), n(0), x(<BackspaceIcon/>, KeyboardKeys.delete)
  ]

  return (
    <Paper elevation={10}>
      <Grid container spacing={0}>
        {keyBoard.map(({ c, k }) => (
          <Grid className={styles.ButtonSpace} item xs={4} key={`key-id-${k}`}>
            {c}
          </Grid>
        ))}
      </Grid>
      </Paper>
  )
}

export default Keyboard
