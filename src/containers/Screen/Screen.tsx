import React, { PropsWithChildren } from 'react'
import styles from './Screen.scss'
type Props = {}
const Screen = ({ children }: PropsWithChildren<Props>) => {
  const Children = React.Children.toArray(children)
  const first = Children.shift()
  const last = Children.pop()
  return (
    <div className={styles.Screen}
    >
      {first}
      {Children}
      {last}
    </div>
  )
}

export default Screen
