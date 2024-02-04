
import './App.css';
import React, { Component} from 'react';

class ForceUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
  }

  handleForceUpdate = () => {
    this.forceUpdate(() => {
      this.state.counter = this.state.counter + 1;
      console.log("Console has been re-rendered!")
    });
  };    

  render() {
    return (
      <div>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.handleForceUpdate}>Force Update</button>
      </div>
    )
  }
}

export default ForceUpdate;
 