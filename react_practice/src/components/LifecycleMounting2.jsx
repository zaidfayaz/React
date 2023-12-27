import React, { Component } from 'react'

class LifecycleMounting2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Zaid'
        }
        console.log("LifeCycle Mounting2 constructor");
    }
    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycle Mounting2 getDerivedStateFromProps")
        return null
    }
    componentDidMount(){
        console.log("LifeCycle Mounting2 componentDidMount");
    }
    render() {
        console.log("LifeCycle Mounting2 render ");
        return (
            <div>
                LifeCycle Mounting 2
            </div>
        )
    }
}

export default LifecycleMounting2
