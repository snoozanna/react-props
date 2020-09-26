import React, { Component } from "react";
class Child extends Component {
  state = {};
  render() {
    return (
      <>
        <p>{this.props.color}</p>
        <p> {this.props.steve}</p>
        {this.props.array.map((item) => (
          <p>the number is {item.toString()}</p>
        ))}

        {this.props.object.dog && <p> {this.props.object.dog.toString()}</p>}
        <p> {this.props.object.movie()}</p>

        <button onClick={this.props.clickHandler}>CLICK</button>
      </>
    );
  }
}

export default Child;
