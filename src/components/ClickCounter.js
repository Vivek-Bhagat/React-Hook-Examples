import React, { Component } from "react";

class ClickCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  render() {
    return (
      <div>
        This is the normal count method using the function
        <br/>
        <button onClick={this.incrementCount}>
          Count {this.state.count}
        </button>
      </div>
    );
  }
}

export default ClickCounter;
