import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  const calculateResult = () => {
    let calculatedResult;
    switch (operation) {
      case '+':
        calculatedResult = parseFloat(num1) + parseFloat(num2);
        break;
      case '-':
        calculatedResult = parseFloat(num1) - parseFloat(num2);
        break;
      case '*':
        calculatedResult = parseFloat(num1) * parseFloat(num2);
        break;
      case '/':
        calculatedResult = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        calculatedResult = '';
    }
    setResult(calculatedResult);
  };

  return (
    <div>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <select value={operation} onChange={handleOperationChange}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">x</option>
        <option value="/">/</option>
      </select>
      <input type="number" value={num2} onChange={handleNum2Change} />
      <button onClick={calculateResult}>=</button>
      <p>Result: {result}</p>
    </div>
  );
};

export default Calculator;
