import ReactDOM from 'react-dom/client'
import 'react-tiger-transition/styles/main.min.css'
import './index.scss'
import SalaryCalculator from './routes/SalaryCalculator'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement)
  .render(
    <SalaryCalculator/>
  )
