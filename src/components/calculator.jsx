import React, { Component } from 'react';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { equation: ''};
    ['handleValueChange'].forEach(
      (method) => {
        this[method] = this[method].bind(this);
      }
    );
  }

  handleValueChange(event) {
    this.setState({ equation: event.target.value });
  }
  render() {
    return (
      <div>
        <input
          value={this.state.equation}
          onChange={this.handleValueChange} />
        <button>
              =
        </button>
      </div>
    );
  }
}
