import React, {Component} from "react";
class Welcome extends Component {
    render(){
        return <h1> Hey {this.props.name} - I am a Class Component! - a.k.a {this.props.heroName}</h1>
    }
}
export default Welcome

//---------------------Destructuring-----------------

// class Welcome extends Component {
//     render(){
//         const {name, heroName} = this.props
//      //   const {state1, state2} = this.state  //for states
//         return <h1> Hey {name} - I am a Class Component -a.k.a {heroName}</h1>
//     }
// }
// export default Welcome