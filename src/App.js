import React, { Component } from 'react';

export default class App extends Component {
  state = {
    counter: 0
  }

  incr() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decr() {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  render() {
    return (
        <div>
          <input readOnly={true} value={this.state.counter} /><br/>
          <button onClick={this.decr.bind(this)}>-</button>
          <button onClick={this.incr.bind(this)}>+</button>
        </div>
    )
  }
}
