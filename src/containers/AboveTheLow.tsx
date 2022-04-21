import { Button, Card, CardActions, CardContent, CardHeader, Divider, FormControlLabel, FormGroup, Switch, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'
import { useContext } from 'react'
import AppContext from '../context/AppContext'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%',
  boxSizing: 'border-box',
  alignItems: 'center',
  display: 'flex',
  minHeight: '56px',
  justifyContent: 'center'
}))
const AboveTheLaw = () => {
  const {
    toggleBenefit,
    MedicalInsurance,
    DentalInsurance,
    SightInsurance,
    LifeInsurance,
    PantryVouchers,
    SavingsFunds,
    ProductivityBonus
  } = useContext(AppContext)
  const toggleSwitch = benefit => event => toggleBenefit({ ...benefit })
  return (
    <Box
      component="form"
      sx={{ flexGrow: 1 }}
    >
      <Card>
        <CardHeader
          title="Common Above the Law Benefits"
        />
        <CardContent>
          <Typography variant="body1" color="text.secondary">
            The next benefits affect the calculations.<br/>
          </Typography>
          <Grid container spacing={2}>
          <Grid item xs={6}>
            <Item>
            <FormGroup>
              <FormControlLabel
                label="Major M. E. Insurance"
                control={<Switch checked={MedicalInsurance} onChange={toggleSwitch({ MedicalInsurance })} />} />
            </FormGroup>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
            <FormGroup>
              <FormControlLabel
                label="Life Insurance"
                control={<Switch checked={LifeInsurance} onChange={toggleSwitch({ LifeInsurance })} />} />
            </FormGroup>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
            <FormGroup>
              <FormControlLabel
                label="Dental Insurance"
                control={<Switch checked={DentalInsurance} onChange={toggleSwitch({ DentalInsurance })} />} />
            </FormGroup>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
            <FormGroup>
              <FormControlLabel
                label="Sight Insurance"
                control={<Switch checked={SightInsurance} onChange={toggleSwitch({ SightInsurance })} />} />
            </FormGroup>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
            <FormGroup>
              <FormControlLabel
                label="Pantry vouchers"
                control={<Switch checked={PantryVouchers} onChange={toggleSwitch({ PantryVouchers })} />} />
            </FormGroup>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
            <FormGroup>
              <FormControlLabel
                label="Savings Funds"
                control={<Switch checked={SavingsFunds} onChange={toggleSwitch({ SavingsFunds })} />} />
            </FormGroup>
            </Item>
          </Grid>
          <Grid item xs={6}>
            <Item>
            <FormGroup>
              <FormControlLabel
                label="Productivity Bonus"
                control={<Switch checked={ProductivityBonus} onChange={toggleSwitch({ ProductivityBonus })} />} />
            </FormGroup>
            </Item>
          </Grid>

        </Grid>
        <br/><Divider /><br/>
          <Typography variant="body1" color="text.secondary">
            This benefits do not affect salary calculatio.<br/>
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item>Maternity/Paternity Leave</Item>
            </Grid>
            <Grid item xs={6}>
              <Item>Adoption Leave</Item>
            </Grid>
            <Grid item xs={6}>
              <Item>Seniority Premium</Item>
            </Grid>
            <Grid item xs={6}>
              <Item>Utilities</Item>
            </Grid>
            <Grid item xs={6}>
              <Item>Liquidation or Settlement</Item>
            </Grid>
            <Grid item xs={6}>
              <Item>Social Security</Item>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button target="_blank" href="https://www.nominapro.mx/blog/prestaciones-de-ley/">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Box>

  )
}

export default AboveTheLaw
