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
      {/*props for functional component*/}
        <Greet name ="Zaid" heroName = "Superman"><p>This is a children props</p></Greet>
        <Greet name ="Suhaib" heroName = "Batman"><button>Action</button></Greet>
        <Greet name ="Faizan" heroName = "Spiderman"></Greet>

      { /*props for class component*/}
        <Welcome name ="Zaid" heroName = "Superman"></Welcome>
        <Welcome name ="Suhaib" heroName = "Batman"></Welcome>
        <Welcome name ="Faizan" heroName = "Spiderman"></Welcome>
        <Jsx></Jsx>
      </div>
   
    </>
  )
}

export default App
