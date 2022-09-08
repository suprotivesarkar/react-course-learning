import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureCompDemo from './PureCompDemo'
import RegularComp from './RegularComp'

class ParentComp extends Component {
    state={
        name: 'Supro'
    }
    componentDidMount(){
        setInterval(()=>this.setState({name: 'Sarkar'}),2000)
    }
  render() {
    console.log('******************Parent********************')
    return (
      <div>
        ParentComp
        <MemoComp name={this.state.name}/>
        {/* <PureCompDemo name={this.state.name}/>
        <RegularComp name={this.state.name}/> */}
      </div>
    )
  }
}

export default ParentComp