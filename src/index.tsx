import ReactDOM from 'react-dom/client'
import styles from './index.css'
import styles3 from './index.sass'
import styles2 from './index2.scss'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement)
  .render(
    <>
      <h1 className={styles.Style1}>
        Hello World
      </h1>
      <h2 className={styles2['Style3-Csa']}>
        Casa
      </h2>
      <h3 className={styles3.Style1}>
        Casa
      </h3>
    </>
  )
