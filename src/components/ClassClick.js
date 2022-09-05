import React, { Component } from 'react'

export class ClassClick extends Component {
    clickHandler(){
        console.log('Class Click Handler')
    }
  render() {
    return (
      <div><button onClick={this.clickHandler}>Class Click</button></div>
    )
  }
}

export default ClassClick