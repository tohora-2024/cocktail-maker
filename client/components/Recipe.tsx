import { Link, useParams } from 'react-router-dom'
import cocktailData from '../data/cocktails-recipes.ts'

interface Recipe {
  name: string
  ingredients: string
  instructions: string
}

function RecipeFunc() {
  const params = useParams<{ id: string; name: string }>()
  const spiritName = params.id
  const specificRecipeName = params.name

  const specificRecipe = cocktailData.find(
    (recipe: Recipe) => recipe.name === specificRecipeName
  )

  return (
    <div>
      <p>Test!</p>
      {specificRecipe && (
        <ul>
          <li>Name: {specificRecipe.name}</li>
          <li>Ingredients: {specificRecipe.ingredients}</li>
          <li>Instructions: {specificRecipe.instructions}</li>
        </ul>
      )}
    </div>
  )
}

export default RecipeFunc
