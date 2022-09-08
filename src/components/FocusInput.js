import React, { Component } from 'react'
import InputDemo from './InputDemo'

class FocusInput extends Component {
    constructor(props) {
      super(props)
        this.componentRef = React.createRef()
    }
    clickHandler=()=>{
        this.componentRef.current.focusInput()
    }
  render() {
    return (
      <>
        <InputDemo ref={this.componentRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </>
    )
  }
}

export default FocusInput