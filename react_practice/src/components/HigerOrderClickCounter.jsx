import React, { Component } from 'react'
import UpdatedComponent from './WithCounterHigherOrder'

class HigerOrderClickCounter extends Component {
    render() {
                const {count, incrementCount} = this.props
                return <button onClick=  {incrementCount}> Clicked {count} times</button>
    }
}

export default UpdatedComponent(HigerOrderClickCounter)
