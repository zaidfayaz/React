import React, { Component } from 'react'

 class UserRenderProps extends Component {
  render() {
    return (
      <div>
        {this.props.render(true)}
      </div>
    )
  }
}

export default UserRenderProps
