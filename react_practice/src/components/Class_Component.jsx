import React, {Component} from "react";
class Welcome extends Component {
    render(){
        return <h1> Hey {this.props.name} - I am a Class Component -a.k.a {this.props.heroName}</h1>
    }
}
export default Welcome