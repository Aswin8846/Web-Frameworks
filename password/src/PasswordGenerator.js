import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const generatePassword = () => {
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()-_+=<>?';

    let chars = lowercaseLetters;
    if (includeUppercase) chars += uppercaseLetters;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    let generatedPassword = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      generatedPassword += chars[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <div>
      <h2>Password Generator</h2>
      <label>
        Password Length:
        <input
          type="number"
          value={passwordLength}
          onChange={(e) => setPasswordLength(parseInt(e.target.value))}
        />
      </label>
      <label>
        Include Uppercase Letters:
        <input
          type="checkbox"
          checked={includeUppercase}
          onChange={(e) => setIncludeUppercase(e.target.checked)}
        />
      </label>
      <label>
        Include Numbers:
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
        />
      </label>
      <label>
        Include Symbols:
        <input
          type="checkbox"
          checked={includeSymbols}
          onChange={(e) => setIncludeSymbols(e.target.checked)}
        />
      </label>
      <button onClick={generatePassword}>Generate Password</button>
      <div>
        <strong>Password:</strong> {password}
      </div>
    </div>
  );
};

export default PasswordGenerator;