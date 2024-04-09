import React from 'react';

const Recipe = ({ recipe }) => {
  return (
    <div>
      <h2>{recipe.label}</h2>
      <img src={recipe.image} alt={recipe.label} />
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>
      <p>Calories: {recipe.calories}</p>
    </div>
  );
};

export default Recipe;
