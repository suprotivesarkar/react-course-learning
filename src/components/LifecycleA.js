import React,{ Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component{
  constructor(){
    super()
    this.state={
      name: 'Supro'
    }
    console.log('LifecycleA constructor')
  }
  static getDerivedStateFromProps(props,state){
    console.log('LifecycleA getDerivedFromProps')
    return null
  }
  componentDidMount(){
    console.log('LifecycleA componentDidMount')
  }
render(){
  console.log('LifecycleA render')
  return <div>
    <div>LifecycleA render</div>
    <LifecycleB/>
  </div>
  
}
}
export default LifecycleA