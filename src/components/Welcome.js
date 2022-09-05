import React, { Component } from 'react'

class Welcome extends Component {
  render() {
    const {greet} = this.props
    return (
      <div>{greet}</div>
    )
  }
}

export default Welcome