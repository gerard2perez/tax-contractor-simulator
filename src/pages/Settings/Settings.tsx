import BalanceIcon from '@mui/icons-material/Balance'
import GavelIcon from '@mui/icons-material/Gavel'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { useState } from 'react'
import AboveTheLaw from '../../containers/AboveTheLow'
import LawBenefits from '../../containers/LawBenefits'
const Settings = () => {
  const [value, setValue] = useState(0)
  const handleOnChange = (_event, value) => setValue(value)
  return (
    <Box sx={{ flexGrow: 1 }}>
      {(value === 0) && <LawBenefits/>}
      {(value === 1) && <AboveTheLaw/>}
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
            showLabels
            value={value}
            onChange={handleOnChange}
          >
            <BottomNavigationAction label="Law Benefits" icon={<BalanceIcon />} />
            <BottomNavigationAction label="Law+ Benefits" icon={<GavelIcon />} />
            {/* <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} /> */}
          </BottomNavigation>
        </Paper>
    </Box>
  )
}

export default Settings
