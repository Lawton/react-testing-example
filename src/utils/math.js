// attempt 0
export class Math0 {
  static parseEquation() {
  }
}

// attempt 1
export class Math1 {
  static parseEquation(equation) {
    const addValues = equation.split('+');
    let sum = 0;
    addValues.forEach((value) => {
      sum += value;
    });
    return sum;
  }
}

// attempt 2
export class Math2 {
  static parseEquation(equation) {
    const addValues = equation.split('+');
    let sum = 0;
    addValues.forEach((value) => {
      sum += parseInt(value.trim());
    });
    return sum;
  }
}

// attempt 3
export class Math3 {
  static parseEquation(equation) {
    const addValues = equation.split('+');
    let sum = 0;
    const invalidInput = addValues.some((value) => {
      const trimValue = value.trim();
      if(!isNaN(parseInt(trimValue))  && isFinite(trimValue)) {
        return true;
      } else {
        sum += parseInt(trimValue);
        return false;
      }
    });
    return invalidInput ? NaN : sum;
  }
}

// attempt 4
export class Math4 {
  static parseEquation(equation) {
    const addValues = equation.split('+');
    let sum = 0;
    const invalidInput = addValues.some((value) => {
      const trimValue = value.trim();
      if(!isNaN(parseInt(trimValue))  && isFinite(trimValue)) {
        sum += parseInt(trimValue);
        return false;
      } else {
        return true;
      }
    });
    return invalidInput ? NaN : sum;
  }
}
