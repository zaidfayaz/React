import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "Hello"
        }
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler() {
        this.setState({
            message: "Goodbye!"
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/*ist approach of event binding*/} 
              {/*  <button onClick={this.clickHandler.bind(this)}> EventBind-Click</button> */}

                {/*2nd approach of event binding is use of arrow functions*/}
                {/*<button onClick={()=> this.clickHandler()}> EventBind-Click</button>*/}

                {/*2nd approach of event binding is use of bind in constructor*/}
                <button onClick={this.clickHandler}> EventBind-Click</button>
            </div>
        )
    }
}

export default EventBind
