import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './App.module.scss'

export const App = () => {
  const [count, setCount] = useState(0)



  return (
    <>
    <Link to={'/about'}>about</Link>
    <Link to={'/shop'}>shop</Link>
      <p>{count}</p>
      <button className={styles.button} onClick={() => setCount(count + 1)}>UP</button>
      <Outlet />
    </>
  )
}
