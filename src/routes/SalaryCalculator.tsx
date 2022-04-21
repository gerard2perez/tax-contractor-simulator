import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../containers/Layout/Layout'
import AppContext from '../context/AppContext'
import useInitialState from '../hooks/useInitialState'
import Home from '../pages/Home/Home'
import Settings from '../pages/Settings/Settings'
import AppTheme from './ThemeProvider'
const SalaryCalculator = () => {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <AppTheme>
          <Layout>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/settings" element={<Settings/>}/>
              {/*
              <Route path="/orders" element={<Orders/>}/>
              <Route path="/recovery-password" element={<RecoveryPassword/>}/>
              <Route path="/email-sent" element={<EmailSent/>}/>
              <Route path="/checkout" element={<CheckOut/>}/>
              <Route path="*" element={<NotFound/>}/> */}
            </Routes>
            </Layout>
          </AppTheme>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default SalaryCalculator
