import { Link, useParams } from 'react-router-dom'
import * as cocktailData from '../data/cocktails-recipes.ts'

interface Recipe {
  name: string
  ingredients: string
  instructions: string
}

function RecipeFunc() {
  const params = useParams()
  const spiritName = params.id
  const specificRecipe = params.name

  return (
    <div>
      <p>Test!</p>
      <ul>
        {/* <li>{specificRecipe.name}</li>
        <li>{recipe.ingredients}</li>
        <li>{recipe.instructions}</li> */}
      </ul>
    </div>
  )
}

export default RecipeFunc
