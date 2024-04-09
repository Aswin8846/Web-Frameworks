import React, { useState } from 'react';

const Bmi = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const bmiValue = (weight / (height * height)).toFixed(2);
      setBMI(bmiValue);
    }
  };

  return (
    <div>
      <h1>BMI Calculator</h1>
      <input
        type="number"
        placeholder="Enter your weight (in kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="Enter your height (in meters)"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <br />
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && <p>Your BMI is: {bmi}</p>}
    </div>
  );
};

export default Bmi;
