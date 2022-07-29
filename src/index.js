export default {
    add: (n1, n2) => {
      if (isNaN(n1) || isNaN(n2)) {
        throw new Error('[calculator.add] Passed arguments must be a number (integer or float).');
      }
  
      return n1 + n2;
    },
    subtract: (n1, n2) => {
      if (isNaN(n1) || isNaN(n2)) {
        throw new Error('[calculator.subtract] Passed arguments must be a number (integer or float).');
      }
  
      return n1 - n2;
    },
    multiply: (n1, n2) => {
      if (isNaN(n1) || isNaN(n2)) {
        throw new Error('[calculator.multiply] Passed arguments must be a number (integer or float).');
      }
  
      return n1 * n2;
    },
    divide: (n1, n2) => {
      if (isNaN(n1) || isNaN(n2)) {
        throw new Error('[calculator.divide] Passed arguments must be a number (integer or float).');
      }
  
      return n1 / n2;
    },
  };