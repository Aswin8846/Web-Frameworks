import React, { useState } from 'react';

const RandomNumberGenerator = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const minVal = parseInt(min);
    const maxVal = parseInt(max);
    const randomNum = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
    setRandomNumber(randomNum);
  };

  return (
    <div>
      <h2>Random Number Generator</h2>
      <div>
        <label htmlFor="min">Min:</label>
        <input
          type="number"
          id="min"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="max">Max:</label>
        <input
          type="number"
          id="max"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </div>
      <button onClick={generateRandomNumber}>Generate Random Number</button>
      {randomNumber && (
        <div>
          <h3>Random Number: {randomNumber}</h3>
        </div>
      )}
    </div>
  );
};

export default RandomNumberGenerator;
