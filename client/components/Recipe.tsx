import React from 'react'
import cocktails from '../data/cocktails-recipes.ts'

function Recipe() {
  const { name } = match.params
  const cocktail = cocktails.find((cocktail) => cocktail.name === name)

  return (
    <div>
      <h2>{cocktail.name}</h2>
      <p>Ingredients: {cocktail.ingredients}</p>
      <p>Instructions: {cocktail.instructions}</p>
    </div>
  )
}

export default Recipe
