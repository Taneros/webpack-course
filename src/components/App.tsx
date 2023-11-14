import { useState } from 'react'
import './App.scss'

export const App = () => {
  const [count, setCount] = useState(0)



  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>UP</button>
    </>
  )
}
