import React, { Component } from 'react';
// import { Math2 as math } from '../utils/math';
import { Math4 as math } from '../utils/math';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { equation: '', calculatedResult: '', errorMessage: '' };
    ['handleValueChange', 'calculateValue', 'calculateValue2', 'calculateValue3'].forEach(
      (method) => {
        this[method] = this[method].bind(this);
      }
    );
  }

  handleValueChange(event) {
    this.setState({ equation: event.target.value });
  }

  calculateValue3() {
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

  calculateValue2() {
    const additionSum = math.parseEquation(this.state.equation);
    if (isNaN(additionSum)) {
      this.setState(
        {
          errorMessage: 'Invalid input. Please input only numbers.'
        }
      );
    } else {
      this.setState(
        {
          calculatedResult: additionSum
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
        <button onClick={this.calculateValue3}>
              =
        </button>
        <label className="result">{this.state.calculatedResult}</label>
        <div className="error-message">{this.state.errorMessage}</div>
      </div>
    );
  }
}
