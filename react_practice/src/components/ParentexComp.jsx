import React, { Component } from 'react'
import PureComp from './PureComp'
import RegularComp from './RegularComp'
import MemoComp from './MemoComp'

class ParentexComp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "Zaid Fayaz"
        }
    }
    componentDidMount(){
    setInterval(() => {
        this.setState({
            name: "Zaid Fayaz"
        })
    }, 2000);
}
render() {
    return (
        <div>
             Parent Component
             <MemoComp></MemoComp>
            <PureComp name={this.state.name}></PureComp>
            <RegularComp name={this.state.name} ></RegularComp>
      </div>
    )
}
}
export default ParentexComp
