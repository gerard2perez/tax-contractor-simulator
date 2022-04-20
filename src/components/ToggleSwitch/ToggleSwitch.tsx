import styles from './ToggleSwitch.scss'
const ToggleSwitch = () => {
  return (
    <div className={styles.ToggleSwitch}>
      <span className={styles.span}>Mode</span>
      <label className={styles.switch}>
        <input type="checkbox"/>
        <span className={styles.slider}></span>
      </label>
    </div>
  )
}

export default ToggleSwitch
