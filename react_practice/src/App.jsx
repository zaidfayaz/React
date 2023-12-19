import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greet from './components/Functional_Component'
import Welcome from './components/Class_Component'

function App() {
  return (
    <>
      <div className='App'>
        <Greet></Greet>
        <Welcome></Welcome>
      </div>
   
    </>
  )
}

export default App
