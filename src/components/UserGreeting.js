import React, { Component } from "react";

class UserGreeting extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true
    };
  }
  render() {
    //Short-Circuit operator
    return this.state.isLoggedIn && <div>Hello Supro</div>;
    //Using ternary operator(**)
    // return this.state.isLoggedIn ? (
    //   <div>Hello Supro</div>
    // ) : (
    //   <div>Hello Guest</div>
    // );
    //Using Element Variable
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Hello Supro</div>;
    // } else {
    //   message = <div>Hello Guest</div>;
    // }
    // return <div>{message}</div>;

    //Using if-else
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Supro</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
    // return (
    //   <div>
    //     <div>Welcome Supro</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
