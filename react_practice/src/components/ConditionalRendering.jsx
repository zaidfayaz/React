import React, { Component } from 'react'

class ConditionalRendering extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false   
    }
  }
  render() {
                   
    //ist appraoch is if else
    // if (this.state.isLoggedIn) {
    //   return <div> Hi Haseeb </div>
    // }
    // else {
    //   return <div>Hi Iqu</div>
    // }

    //2nd approach is element variable
    // let message;
    // if(this.state.isLoggedIn){
    //   message = <div>Welcome Haseeb</div>
    // }else{
    //   message = <div>Welcome Iqu</div>
    // }
    // return <div>{message}</div>

    //  //3nd approach is ternary operator
    return this.state.isLoggedIn ? <div>Welcome haseeb</div> : <div>Welcome Iquu</div>

     //4th approach is short circuit operator
    // return this.state.isLoggedIn && <div>Welcome Iqu</div>
  }

} 

export default ConditionalRendering
