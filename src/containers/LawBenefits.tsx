import { Button, Card, CardActions, CardContent, CardHeader, Divider, InputAdornment, TextField, Typography } from '@mui/material'
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
const LawBenefits = () => {
  const {
    PaidVacations,
    SundayPremium,
    VacationsBonus,
    Aguinaldo,
    RestDays
  } = useContext(AppContext)
  return (
    <Box component="form"
      sx={{ flexGrow: 1, marginBottom: '54px' }}
    >
      <Card>
        <CardHeader title="Mexican Law Benefits" />
        <CardContent>
          <Typography variant="body1" color="text.secondary">
            The next benefits affect the calculations.<br/>
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField label="Paid Vacations"
                type="number"
                variant="filled"
                defaultValue={PaidVacations}
                InputProps={{ endAdornment: <InputAdornment position="end">days</InputAdornment> }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Vacations Bonus"
                type="number"
                variant="filled"
                defaultValue={VacationsBonus}
                InputProps={{ endAdornment: <InputAdornment position="end">%</InputAdornment> }}
                />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Aginaldo"
                type="number"
                variant="filled"
                defaultValue={Aguinaldo}
                InputProps={{ endAdornment: <InputAdornment position="end">days</InputAdornment> }}
              />
            </Grid>
            <Grid item xs={6}>
              <Item>Social Security</Item>
            </Grid>
          </Grid>
          <br/><Divider /><br/>
          <Typography variant="body1" color="text.secondary">
            This benefits do not affect salary calculatio.<br/>
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField label="Sunday Premium"
                type="number"
                variant="filled"
                defaultValue={SundayPremium}
                disabled
                InputProps={{
                  endAdornment: <InputAdornment position="end">%</InputAdornment>
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField label="Rest Days"
                type="number"
                variant="filled"
                disabled
                defaultValue={RestDays}
                InputProps={{
                  endAdornment: <InputAdornment position="end">days</InputAdornment>
                }}
              />
            </Grid>
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
            {/* <Grid item xs={6}>
              <Item>
              <FormGroup>
                <FormControlLabel
                  label="Maternity/Paternity Leave"
                  control={<Switch defaultChecked />} />
              </FormGroup>
              </Item>
            </Grid> */}
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

export default LawBenefits
