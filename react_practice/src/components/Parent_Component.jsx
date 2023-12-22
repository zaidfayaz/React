import React, { Component } from 'react'

 class parentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName : "parent"
      }
      this.greetParent = this.greetParent.bind(this)
    }
    greetParent(){
        alert(`Hello" ${ this.state.parentName} `)
    }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default parentComponent
