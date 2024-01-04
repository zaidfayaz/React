import React, { Component } from 'react'
import ClassRef from './ClassRef'

 class ParentClassRef extends Component {
    constructor(props) {
      super(props)
      this.componentRef = React.createRef()
    }
    clickHandler= () =>{
        this.componentRef.current.focusInput()
    }
    
  render() {
    return (
      <div>
        <ClassRef ref = {this.componentRef}></ClassRef>
        <button onClick = {this.clickHandler}>Foucs Input</button>
      </div>
    )
  }
}

export default ParentClassRef
