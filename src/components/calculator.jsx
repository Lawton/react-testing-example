import React, { Component } from 'react';
import { Math2 as math } from '../utils/math';
// import { Math4 as math } from '../utils/math';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { equation: '', calculatedResult: '' };
    ['handleValueChange', 'calculateValue', 'calculateValue2'].forEach(
      (method) => {
        this[method] = this[method].bind(this);
      }
    );
  }

  handleValueChange(event) {
    this.setState({ equation: event.target.value });
  }

  calculateValue2() {
    const additionSum = math.parseEquation(this.state.equation);
    if (isNaN(additionSum)) {
      this.setState(
        {
          calculatedResult: '',
          errorMessage: 'Invalid input. Please input only numbers.'
        }
      );
    } else {
      this.setState(
        {
          calculatedResult: additionSum,
          errorMessage: ''
        }
    );
    }
  }

  calculateValue() {
    const additionSum = math.parseEquation(this.state.equation);
    this.setState({calculatedResult: additionSum});
  }


  render() {
    return (
      <div>
        <input
          value={this.state.equation}
          onChange={this.handleValueChange} />
        <button onClick={this.calculateValue2}>
              =
        </button>
        <label className="result">{this.state.calculatedResult}</label>
        <div className="error-message">{this.state.errorMessage}</div>
      </div>
    );
  }
}
