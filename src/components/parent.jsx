import React, { Component } from "react";
import Child from "./child";

class Parent extends Component {
  state = {
    color: "orange",
    number: 27,
    object: { dog: true, movie: "Mulan" },
    myArray: [0, 1, 2, 3, 8],
    click: false,
    loading: true,
  };

  clickHandler = () => {
    this.setState({
      object: { ...this.state.object, dog: !this.state.object.dog },
    });
  };

  render() {
    return (
      <>
        <Child
          clickHander={this.clickHandler}
          array={this.state.myArray}
          color={this.state.color}
          steve={this.state.number}
          object={this.state.object}
        />
      </>
    );
  }
}

export default Parent;
