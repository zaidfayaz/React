import React, { Component } from 'react'
import LifecycleMounting2 from './LifecycleMounting2';

class LifecycleMounting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Zaid'
        }
        console.log("LifeCycle Mounting constructor");
    }
    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycle Mounting getDerivedStateFromProps")
        return null
    }
    componentDidMount(){
        console.log("LifeCycle Mounting componentDidMount");
    }
    render() {
        console.log("LifeCycle Mounting render ");
        return (
            <div>
                <div>LifeCycle Mounting</div>
                <LifecycleMounting2></LifecycleMounting2>
            </div>
        )
    }
}

export default LifecycleMounting
