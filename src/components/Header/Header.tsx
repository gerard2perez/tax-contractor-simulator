import MenuIcon from '@mui/icons-material/Menu'
import { FormControlLabel, FormGroup, IconButton, Stack, Switch } from '@mui/material'
import * as React from 'react'
import AppContext from '../../context/AppContext'
type Props = {
  toggleDrawer: (ev: React.KeyboardEvent | React.MouseEvent) => void
  className: string
}
function Header ({ toggleDrawer, className }: Props) {
  const { usdMode, toggleMode } = React.useContext(AppContext)
  return <Stack
    className={className}
    direction="row"
    justifyContent="space-between"
  >
    <IconButton onClick={toggleDrawer} aria-label="menu">
      <MenuIcon />
    </IconButton>
    <FormGroup>
      <FormControlLabel
        label={`${usdMode ? 'Switch to MX' : 'Switch to US'}`}
        control={<Switch
          checked={usdMode}
          onChange={toggleMode} />} />
    </FormGroup>
  </Stack>
}

export default Header
