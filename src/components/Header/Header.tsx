import CalculateIcon from '@mui/icons-material/Calculate'
import FullscreenIcon from '@mui/icons-material/Fullscreen'
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Box, FormControlLabel, FormGroup, IconButton, Switch, Toolbar } from '@mui/material'
import * as React from 'react'
import AppContext from '../../context/AppContext'
type Props = {
  toggleDrawer: (ev: React.KeyboardEvent | React.MouseEvent) => void
  className: string
}
function Header ({ toggleDrawer }: Props) {
  const { usdMode, toggleMode, fullScreen, toggleFullScreen } = React.useContext(AppContext)
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton onClick={toggleDrawer} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }}>
          <CalculateIcon color="primary" />
        </Box>
        <FormGroup>
          <FormControlLabel
            label={`${usdMode ? 'Switch to MX' : 'Switch to US'}`}
            control={<Switch
              checked={usdMode}
              onChange={toggleMode} />} />
        </FormGroup>
        <IconButton onClick={toggleFullScreen} aria-label="menu">
          {!fullScreen && <FullscreenIcon />}
          {fullScreen && <FullscreenExitIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
