import { useState } from 'react'
import styles from './App.module.scss'

export const App = () => {
  const [count, setCount] = useState(0)



  return (
    <>
      <p>{count}</p>
      <button className={styles.button} onClick={() => setCount(count + 1)}>UP</button>
    </>
  )
}
