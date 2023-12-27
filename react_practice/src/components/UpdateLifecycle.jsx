import React, { Component } from 'react'
import LifecycleMounting2 from './LifecycleMounting2';

class UpdateLifecycle extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Zaid'
        }
        console.log("Update Life Cycle Mounting constructor");
    }
    static getDerivedStateFromProps(props, state) {
        console.log("Update Life Cycle  getDerivedStateFromProps")
        return null
    }
    shoulComponentUpdate(){
        console.log("Update lifecycle shoulComponentUpdate");
        return true 
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Update lifecycle getSnapshotBeforeUpdate");
        return null
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("Update lifecycle componentDidUpdate ");
        
    }
    changeState= ()=>{
        this.setState({
            name : "Zaid Fayaz"
        })
    }
    render() {
        console.log("Update Life Cycle Mounting render ");
        return (
            <div>
                <div>Update Life Cycle </div>
                <button onClick={this.changeState}>Change State</button>
            </div>
        )
    }
}

export default UpdateLifecycle
