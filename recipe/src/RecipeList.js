import React from 'react';
import Recipe from './Recipe';

const RecipeList = ({ recipes }) => {
  return (
    <div>
      {/* Assuming 'recipe' object contains the recipe details */}
      {recipes.map((recipe, index) => (
        <Recipe key={index} recipe={recipe.recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
