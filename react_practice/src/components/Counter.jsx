import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    increment(){
        this.setState({
            count : this.state.count + 1
        }, () => {console.log('CalBack Value', this.state.count)})
        console.log(this.state.count);  //here it will differ from setState value becouse setState is a Asynchronous 
    }

    //update the state based on the previous state value, pass in a function as an argument instead of the regular object.

    increment1(){
        this.setState ((prevState =>({
            count : prevState.count + 1
        })))

    }
    incrementFive(){
        this.increment1()
        this.increment1()
        this.increment1()
        this.increment1()
        this.increment1()
    }
    render() {
        return (
            <div>
                <div> Count - {this.state.count }</div>
                <button onClick={()=>this.increment()}>Increment</button>
                <button onClick={()=>this.incrementFive()}>Increment</button>

            </div>
        )
    }
}

export default Counter