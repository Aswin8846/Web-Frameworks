import React, { useState } from 'react';

const CharacterCounter = () => {
  const [text, setText] = useState('');
  const [charCount, setCharCount] = useState(0);

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);
    setCharCount(inputText.length);
  };

  return (
    <div>
      <h2>Character Counter</h2>
      <textarea
        value={text}
        onChange={handleInputChange}
        placeholder="Enter text here..."
        rows={5}
        cols={50}
      />
      <p>Character Count: {charCount}</p>
    </div>
  );
};

export default CharacterCounter;
