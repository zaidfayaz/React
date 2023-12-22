import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandler(){
        console.log("button clicked");
    }
  render() {
    return (
      <div>
      <button onClick={this.clickHandler}>Class Componenet Click Handler - Click</button>
        
      </div>
    )
  }
}

export default ClassClick
