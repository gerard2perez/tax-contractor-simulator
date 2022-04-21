import { createTheme, ThemeProvider } from '@mui/material/styles'
import { ReactNode } from 'react'

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})
type Props = {
  children: ReactNode
}
function AppTheme ({ children }: Props) {
  return (
    <ThemeProvider theme={darkTheme}>
      {children}
    </ThemeProvider>
  )
}

export default AppTheme
