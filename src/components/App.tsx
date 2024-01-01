import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './App.module.scss'
import fearImg from '@/assets/fear.png'
import Cloud from '@/assets/cloud-bolt-svgrepo-com.svg'

export const App = () => {
  const [count, setCount] = useState<number>(0)

  if (__PLATFORM__ === 'desktop') {

    return (
      <>
        <div data-testId='App.TestIdDesktop'></div>
        <Link to={'/about'}>about</Link>
        <Link to={'/shop'}>shop</Link>
        <h1>PLATFORM=desktop</h1>
        <p>{count}</p>
        <button className={styles.button} onClick={() => setCount(count + 1)}>UP</button>
        <Cloud fill="green" />
        <Outlet />
      </>
    )
  }

  if (__PLATFORM__ === 'mobile') {

    return (
      <>
        <Link to={'/about'}>about</Link>
        <Link to={'/shop'}>shop</Link>
        <h1>PLATFORM=mobile</h1>
        <p>{count}</p>
        <button className={styles.button} onClick={() => setCount(count + 1)}>UP</button>
        {/* <img src={fearImg} alt="fear" /> */}
        <Cloud fill="green" />
        <Outlet />
      </>
    )
  }

  return null
}
