import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
      <h1>Vite + React </h1>
      <h2>Hello Zaid, Welcome to React! </h2>
      <ul>
          <li>Menu</li>
          <li>About</li>
          <li></li>

      </ul>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div>
        <button onClick={() => setCount((count) => count + 1)}>
        index is {count}
      </button>
      </div>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR s
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more........
      </p>
    </>
  )
}

export default App
