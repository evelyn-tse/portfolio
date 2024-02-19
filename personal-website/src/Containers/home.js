import React, { Component } from "react";
import Greeting from "./greeting";
import About from "./about";

class Home extends Component {
  render() {
    return (
      <div>
        <Greeting theme={this.props.theme}/>
        <About theme={this.props.theme}/>
      </div>
    );
  }
}

export default Home;
