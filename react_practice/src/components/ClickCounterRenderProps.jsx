import React, { Component } from 'react'

class ClickCounterRenderProps extends Component {
  
  render() {
    const { count, incrementCount } = this.props
    return <button onClick={incrementCount}> Clicked {count} times</button>
  }
}

export default ClickCounterRenderProps
