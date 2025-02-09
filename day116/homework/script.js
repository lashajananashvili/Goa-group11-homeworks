import { fetchRecipes } from './recipeFetcher.js';

const searchButton = document.getElementById('searchButton');
const ingredientInput = document.getElementById('ingredientInput');
const resultsDiv = document.getElementById('results');

searchButton.addEventListener('click', async () => {
  const ingredient = ingredientInput.value.trim();
  if (!ingredient) {
    alert('Please enter an ingredient.');
    return;
  }

  try {
    const recipes = await fetchRecipes(ingredient);
    displayRecipes(recipes);
  } catch (error) {
    resultsDiv.innerHTML = `<p>Error fetching recipes. Please try again later.</p>`;
  }
});

const displayRecipes = (recipes) => {
  if (recipes.length === 0) {
    resultsDiv.innerHTML = `<p>No recipes found for this ingredient.</p>`;
    return;
  }

  resultsDiv.innerHTML = recipes
    .map(
      (recipe) => `
      <div class="recipe">
        <h2>${recipe.recipe.label}</h2>
        <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
        <p><strong>Ingredients:</strong> ${recipe.recipe.ingredientLines.join(', ')}</p>
        <p><strong>Instructions:</strong> <a href="${recipe.recipe.url}" target="_blank">View Recipe</a></p>
      </div>
    `
    )
    .join('');
};