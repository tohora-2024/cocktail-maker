import React, { useState } from 'react'
import * as spiritsData from '../data/spiritsDataRandom'
import { Cocktail } from './interfaces'

const RandomDrinkGenerator: React.FC = () => {
  const [randomDrink, setRandomDrink] = useState<Cocktail | null>(null)

  const generateRandomDrink = () => {
    const entries = Object.entries(spiritsData)
    const randomEntryIndex = Math.floor(Math.random() * entries.length)
    const [randomSpirit, cocktails] = entries[randomEntryIndex]
    const randomCocktailIndex = Math.floor(Math.random() * cocktails.length)
    const randomCocktail = cocktails[randomCocktailIndex]
    setRandomDrink(randomCocktail)
  }

  return (
    <div className="random-drink-generator">
      <h2>Generate a Random Drink</h2>
      <button onClick={generateRandomDrink}>Generate</button>
      {randomDrink && (
        <div className="random-drink-details">
          <h3>{randomDrink.name}</h3>
          <p>Ingredients: {randomDrink.ingredients}</p>
          <p>Instructions: {randomDrink.instructions}</p>
        </div>
      )}
    </div>
  )
}

export default RandomDrinkGenerator
