import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CurrencyConverter = () => {
  const [exchangeRates, setExchangeRates] = useState({});
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
        setExchangeRates(response.data.rates);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchExchangeRates();
  }, [fromCurrency]);

  const handleConvert = () => {
    const rate = exchangeRates[toCurrency];
    if (rate) {
      const result = amount * rate;
      setConvertedAmount(result);
    } else {
      setConvertedAmount('N/A');
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Currency Converter</h2>
      <div>
        <label>From: </label>
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          {Object.keys(exchangeRates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <div>
        <label>To: </label>
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          {Object.keys(exchangeRates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleConvert}>Convert</button>
      <div>
        <h3>Result:</h3>
        <p>{convertedAmount}</p>
      </div>
    </div>
  );
};

export default CurrencyConverter;
