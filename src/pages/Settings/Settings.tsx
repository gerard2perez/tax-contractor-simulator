import BalanceIcon from '@mui/icons-material/Balance'
import GavelIcon from '@mui/icons-material/Gavel'
import Box from '@mui/material/Box'
import Footer from '../../components/Footer/Footer'
import AboveTheLaw from '../../containers/AboveTheLow'
import LawBenefits from '../../containers/LawBenefits'
import useFooterNav from '../../hooks/useFooterNav'

const tabInfo = [
  { label: 'Law Benefits', icon: <BalanceIcon /> },
  { label: 'Law+ Benefits', icon: <GavelIcon /> }
]
const Settings = () => {
  const { pageIndex, NavItem, handleOnChange } = useFooterNav(0)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <NavItem Element={LawBenefits}/>
      <NavItem Element={AboveTheLaw}/>
      <Footer
        pageIndex={pageIndex}
        handleOnChange={handleOnChange}
        tabs={tabInfo}/>
    </Box>
  )
}

export default Settings
