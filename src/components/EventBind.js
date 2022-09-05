import React, { Component } from "react";

export class EventBind extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello"
    };
    //this.clickHandler = this.clickHandler.bind(this);
  }
  // clickHandler() {
  //   this.setState({
  //     message: "Hi"
  //   });
  // }
  clickHandler = () => {
    this.setState({
      message: "GoodBye"
    });
  };
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>EventBind</button> */}
        {/* <button onClick={() => this.clickHandler()}>EventBind</button> */}
        <button onClick={this.clickHandler}>EventBind</button>
      </div>
    );
  }
}

export default EventBind;
