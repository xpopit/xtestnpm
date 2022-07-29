import calculator from './index';

describe('index.js', () => {
  test('calculator.add throws an error when passed argumen ts are not numbers', () => {
    expect(() => {
      calculator.add('a', 'b');
    }).toThrow('[calculator.add] Passed arguments must be a number (integer or float).');
  });

  test('calculator.subtract throws an error when passed arguments are not numbers', () => {
    expect(() => {
      calculator.subtract('a', 'b');
    }).toThrow('[calculator.subtract] Passed arguments must be a number (integer or float).');
  });

  test('calculator.multiply throws an error when passed arguments are not numbers', () => {
    expect(() => {
      calculator.multiply('a', 'b');
    }).toThrow('[calculator.multiply] Passed arguments must be a number (integer or float).');
  });

  test('calculator.divide throws an error when passed arguments are not numbers', () => {
    expect(() => {
      calculator.divide('a', 'b');
    }).toThrow('[calculator.divide] Passed arguments must be a number (integer or float).');
  });

  test('calculator.add adds two numbers together', () => {
    const result = calculator.add(19, 88);
    expect(result).toEqual(107);
  });

  test('calculator.subtract subtracts two numbers', () => {
    const result = calculator.subtract(128, 51);
    expect(result).toEqual(77);
  });

  test('calculator.multiply multiplies two numbers', () => {
    const result = calculator.multiply(15, 4);
    expect(result).toEqual(60);
  });

  test('calculator.divide divides two numbers', () => {
    const result = calculator.divide(20, 4);
    expect(result).toEqual(5);
  });
});