import React, { Component } from 'react'

class HigerOrderClickCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    
  render() {
    return (
      <div>
        <button> Clicked X times</button>
      </div>
    )
  }
}

export default HigerOrderClickCounter
