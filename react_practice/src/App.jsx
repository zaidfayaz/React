import { PureComponent, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greet from './components/Functional_Component'
import Welcome from './components/Class_Component'
import Jsx from './components/JSX_Format'
import Message from './components/States'
import Counter from './components/Counter'
import FunctionClick from './components/Function_Click'
import ClassClick from './components/Class_Click'
import EventBind from './components/Event_Bind'
import ParentComponent from './components/ParentComponent'
import ConditionalRendering from './components/ConditionalRendering'
import ListRendering from './components/ListRendering'
import StyleSheets from './components/StyleSheets'
import InlineStyling from './components/InlineStyling'
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import LifecycleMounting from './components/LifecycleMounting'
import UpdateLifecycle from './components/UpdateLifecycle'
import Fragments from './components/Fragments'
import FragmentsTable from './components/FragmentsTable'
import PureComp from './components/PureComp'
import ParentexComp from './components/ParentexComp'
import RefsDemo from './components/RefsDemo'
import ClassRef from './components/ClassRef'
import ParentClassRef from './components/ParentClassRef'
import FRParentInput from './components/FRParentInput'
import PortalDemo from './components/PortalDemo'
import HeroExErrorBoundary from './components/HeroExErrorBoundary'

function App() {
  return (
    <>
      <div className='App'>

      {/*Error Boundary*/}
      <HeroExErrorBoundary heroName="Batman"></HeroExErrorBoundary>
      <HeroExErrorBoundary heroName="Superman"></HeroExErrorBoundary>
      <HeroExErrorBoundary heroName="Joker"></HeroExErrorBoundary>

      {/* Portals*/}
      <PortalDemo></PortalDemo>

        {/* FRInput (Forwading refs) and FRPartentInput ex*/}
        <FRParentInput/>

        {/* Class Refs and parent class ref ex*/}
        <ParentClassRef></ParentClassRef>
        
        {/* Refs*/}
        <RefsDemo></RefsDemo>

        {/* Pure Component*/}
        <ParentexComp />

        {/* Fragments Table*/}
        <FragmentsTable></FragmentsTable>

        {/* update Life cycle*/}
        <Fragments></Fragments>

        {/* update Life cycle*/}
        <UpdateLifecycle></UpdateLifecycle>

        {/* Mounting Life cycle*/}
        <LifecycleMounting></LifecycleMounting>

        {/* Form Component*/}
        <Form></Form>

        {/* Styling Sheets*/}
        <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1>
        <InlineStyling></InlineStyling>
        <StyleSheets></StyleSheets>

        {/*List rendering*/}
        <ListRendering></ListRendering>

        {/*conditional rendering*/}
        <ConditionalRendering></ConditionalRendering>

        {/*child to parent communication*/}
        <ParentComponent></ParentComponent>

        {/*Binding Event Handlers*/}
        <EventBind></EventBind>

        {/*Event Handlers*/}
        <FunctionClick></FunctionClick>
        <ClassClick></ClassClick>
        <Counter></Counter>

        {/*props for functional component*/}
        <Greet name="Zaid" heroName="Superman"><p>This is a children props</p></Greet>
        <Greet name="Suhaib" heroName="Batman"><button>Action</button></Greet>
        <Greet name="Faizan" heroName="Spiderman"></Greet>

        { /*props for class component*/}
        <Welcome name="Zaid" heroName="Superman"></Welcome>
        <Welcome name="Suhaib" heroName="Batman"></Welcome>
        <Welcome name="Faizan" heroName="Spiderman"></Welcome>
        <Jsx></Jsx>
        <Message></Message>
      </div>

    </>
  )
}

export default App
