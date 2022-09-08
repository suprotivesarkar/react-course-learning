import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef() //creating access ref

      this.cbRef = null //creating call-back ref
        this.setcbRef = (element) =>{
            this.cbRef = element
        }
    }
    componentDidMount(){
        // console.log(this.inputRef)
        // this.inputRef.current.focus()
        if(this.cbRef){
            this.cbRef.focus()
        }
    }
    clickHandler = () =>{
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <React.Fragment>
        <input type='text' ref={this.inputRef}/>
        <input type='text' ref={this.setcbRef}/>
        <button onClick={this.clickHandler}>Click Me</button>
      </React.Fragment>
    )
  }
}

export default RefsDemo