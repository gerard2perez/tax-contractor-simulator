import MailIcon from '@mui/icons-material/Mail'
import { Container } from '@mui/material'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import * as React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Header from '../../components/Header/Header'
import styles from './Layout.scss'
type Anchor = 'top' | 'left' | 'bottom' | 'right'

function Layout ({ children }: React.PropsWithChildren<any>) {
  const links = [
    { to: '/', display: 'Calculator' },
    { to: '/settings', display: 'Settings' }
  ]
  const [state, setState] = React.useState(false)
  const toggleDrawer = (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }
      setState(!state)
    }

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {links.map(({ to, display }) => (
          <ListItem button key={`menu-${to}`} component={RouterLink as any} to={to}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={display} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  )

  return (
    <Container
      className='Layout'
      disableGutters
      maxWidth='xs'
      sx={{ display: 'flex', flex: 1, flexDirection: 'column', flexGrow: 1, height: '100vh', overflow: 'auto' }}
    >
      <Header
        className={styles.Header}
        toggleDrawer={toggleDrawer(true)}
        />
      {children}
      <Drawer
        anchor='left'
        open={state}
        onClose={toggleDrawer(false)}
      >
        {list('left')}
      </Drawer>
    </Container>
  )
}

export default Layout
