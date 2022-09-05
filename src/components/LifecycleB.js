import React,{ Component } from "react";

class LifecycleB extends Component{
  constructor(){
    super()
    this.state={
      name: 'Supro'
    }
    console.log('LifecycleB constructor')
  }
  static getDerivedStateFromProps(props,state){
    console.log('LifecycleB getDerivedFromProps')
    return null
  }
  componentDidMount(){
    console.log('LifecycleB componentDidMount')
  }
render(){
  console.log('LifecycleB render')
  return <div>LifecycleB render</div>
}
}
export default LifecycleB