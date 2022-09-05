import React, { Component } from 'react'

export class Message extends Component {
    constructor(props) {
      super(props)
      this.state = {
         message: 'Please Subscribe here 👉'
      }
    }
    subscribe(){
        this.setState({
            message: 'Thank You for Subscribing'
        })
    }
  render() {
    return (
      <div><p>{this.state.message}<button onClick={()=>this.subscribe()}>Subscribe</button></p></div>
    )
  }
}

export default Message