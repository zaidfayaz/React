import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greet from './components/Functional_Component'
import Welcome from './components/Class_Component'
import Jsx from './components/JSX_Format'

function App() {
  return (
    <>
      <div className='App'>
        <Greet></Greet>
        <Welcome></Welcome>
        <Jsx></Jsx>
      </div>
   
    </>
  )
}

export default App
