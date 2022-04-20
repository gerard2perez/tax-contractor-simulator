import styles from './Button.scss'
type Props = {
  value: string|number|null
  onClick: (event: Props['value']) => void
}
const Button = ({ value, onClick }: Props) => {
  return (
    <div className={styles.Button}>
      {value !== null &&
      <button className={styles.AnimateButton}
        onClick={() => onClick(value)}
      >
        {value}
      </button>}
    </div>
  )
}

export default Button
