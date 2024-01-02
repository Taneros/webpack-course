import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import styles from './App.module.scss'
import fearImg from '@/assets/fear.png'
import Cloud from '@/assets/cloud-bolt-svgrepo-com.svg'

// TREE SHAKING

function TODO() {
  TODO2()
}

function TODO2() {
  throw new Error("TODO2");
  
}



export const App = () => {
  const [count, setCount] = useState<number>(0)

  const increment = () => {
    // setCount(count + 1)
    TODO()
  }

  if (__PLATFORM__ === 'desktop') {

    return (
      <>
        <div data-testId='App.TestIdDesktop'></div>
        <Link to={'/about'}>about</Link>
        <Link to={'/shop'}>shop</Link>
        <h1>PLATFORM=desktop</h1>
        <p>{count}</p>
        <button className={styles.button} onClick={increment}>UP</button>
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
        <button className={styles.button} onClick={increment}>UP</button>
        {/* <img src={fearImg} alt="fear" /> */}
        <Cloud fill="green" />
        <Outlet />
      </>
    )
  }

  return null
}
