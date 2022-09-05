import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  incrementVal() {
    // this.setState(
    //   {
    //     count: this.state.count + 1
    //   },
    //   () => {
    //     console.log("CallBack:", this.state.count);
    //   }
    // );
    this.setState((prevState, props) => ({
      count: prevState.count + props.value
    }));
  }
  decrementVal() {
    // this.setState(
    //   {
    //     count: this.state.count - 1
    //   },
    //   () => {
    //     console.log("CallBack:", this.state.count);
    //   }
    // );
    this.setState((prevState, props) => ({
      count: prevState.count - props.value
    }));
  }
  decrementByFive() {
    this.decrementVal();
    this.decrementVal();
    this.decrementVal();
    this.decrementVal();
    this.decrementVal();
  }
  incrementByFive() {
    this.incrementVal();
    this.incrementVal();
    this.incrementVal();
    this.incrementVal();
    this.incrementVal();
  }
  render() {
    return (
      <div>
        <button onClick={() => this.decrementByFive()}>Decrement 5-</button>
        <br />
        <button onClick={() => this.decrementVal()}>Decrement -</button>
        <p>Counter: {this.state.count}</p>
        <button onClick={() => this.incrementVal()}>Increment +</button>
        <br />
        <button onClick={() => this.incrementByFive()}>Increment 5+</button>
      </div>
    );
  }
}

export default Counter;
