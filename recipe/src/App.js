import React, { useState } from 'react';
import axios from 'axios';
import RecipeList from './RecipeList';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchValue}&app_id=11d79c4b&app_key=d7a38a18b8f281140496690139154f68`);
      setRecipes(response.data.hits);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Enter ingredients"
      />
      <button onClick={handleSearch}>Search</button>
      {error && <div>{error}</div>}
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
