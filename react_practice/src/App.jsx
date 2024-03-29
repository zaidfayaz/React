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
import ErrorBoundary from './components/ErrorBoundary'
import HigerOrderClickCounter from './components/HigerOrderClickCounter'
import HigherOrderClickHover from './components/HigherOrderClickHover'
import ClickCounterRenderProps from './components/ClickCounterRenderProps'
import HoverCounterRenderProps from './components/HoverCounterRenderProps'
import UserRenderProps from './components/UserRenderProps'
import CounterrRender from './components/CounterRender'
import ComponentC from './components/ComponentC'

function App() {
  return (
    <>
      <div className='App'>
         
      {/*Context */}
      <ComponentC/>


        {/*Render Props */}
        <CounterrRender
          render={(count, incrementCount) => (
            <ClickCounterRenderProps count={count} incrementCount={incrementCount} />)} />

        <CounterrRender
          render={(count, incrementCount) => (
            <HoverCounterRenderProps count={count} incrementCount={incrementCount} />)} />

        {/*<UserRenderProps render = {(isLoggedIn)=>isLoggedIn ? "Zaid Fayaz" : "Guest"}/>
      <HoverCounterRenderProps/>
      <ClickCounterRenderProps/> */}

        {/*Higher order */}
        <HigherOrderClickHover name="Zaid Fayaz" />
        <HigerOrderClickCounter />

        {/*Error Boundary*/}
        <ErrorBoundary>
          <HeroExErrorBoundary heroName="Batman"></HeroExErrorBoundary>
        </ErrorBoundary>
        <ErrorBoundary>
          <HeroExErrorBoundary heroName="Superman"></HeroExErrorBoundary>
        </ErrorBoundary>
        <ErrorBoundary>
          <HeroExErrorBoundary heroName="Joker"></HeroExErrorBoundary>
        </ErrorBoundary>
        <ErrorBoundary>
          <HeroExErrorBoundary heroName="Zaid"></HeroExErrorBoundary>
        </ErrorBoundary>
        {/* Portals*/}
        <PortalDemo></PortalDemo>

        {/* FRInput (Forwading refs) and FRPartentInput ex*/}
        <FRParentInput />

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
        <Welcome name="Faizan" heroName="Spiderman"></Welcome>
        <Jsx></Jsx>
        <Message></Message>
      </div>

    </>
  )
}

export default App
