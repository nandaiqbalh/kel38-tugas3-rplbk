import { useState, useEffect } from 'react'
// @ts-ignore
import reactLogo from './assets/react.svg'
// @ts-ignore
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    if (count === 10) {
      setShowPopup(true)
    } else {
      setShowPopup(false)
    }
  }, [count])

  const resetCount = () => {
    setCount(0)
    setShowPopup(false)
  }

  const incrementCount = () => {
    if (count < 10) {
      setCount(count + 1)
    }
  }

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>KELOMPOK 38 PRAK. RPLBK 2023</h1>
      <div className={`card ${count === 10 ? 'max-count' : ''}`}>
        <div className="count-card">
          <p>Count: {count}</p>
        </div>
        <button onClick={incrementCount} disabled={count === 10}>
          Increment
        </button>
        <br />
        <br />
        {showPopup ? (
          <div className="popup">
            <h1>COUNTER KEL 38 SUDAH SAMPE 10 YAA!</h1>
            <button onClick={resetCount}>Reset Count</button>
            <br /><br />
          </div>
        ) : null}
        <button onClick={decrementCount} disabled={count === 0}>
          Decrement
        </button>
        <br />

      </div>
    </>
  )
}

export default App
