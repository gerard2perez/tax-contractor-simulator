import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import { ReactNode } from 'react'
type Props = {
  // children: ReactNode
  tabs: {
    label: string
    icon: ReactNode
  }[],
  pageIndex: number,
  handleOnChange: (_event: any, value: any) => void
}
function Footer ({ pageIndex, tabs, handleOnChange }: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
            showLabels
            value={pageIndex}
            onChange={handleOnChange}
          >
            {tabs.map(({ label, icon }) => (
              <BottomNavigationAction key={label} label={label} icon={icon} />
            ))}
          </BottomNavigation>
        </Paper>
    </Box>
  )
}

export default Footer
