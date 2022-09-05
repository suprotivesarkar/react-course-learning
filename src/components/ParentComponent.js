import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Supro(This is a Parent)'
      }
      this.callParent = this.callParent.bind(this)
    }
    callParent(child){
        alert(`Hello ${this.state.parentName}-${child}`)
    }
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.callParent}/>
      </div>
    )
  }
}

export default ParentComponent