import { Link, useParams } from 'react-router-dom'
import data from '../data/spirits.ts'
// import cocktailsRecipes from '../data/cocktails-recipes.ts'

function Spirits() {
  const params = useParams()
  const spiritName = data[params.id as string]
  const cocktails = spiritName ? spiritName.cocktails : []
  // console.log(params, spiritName, cocktails)
  return (
    <div>
      <h2>Cocktails with{params.id}</h2>
      <ul>
        {cocktails.map((cocktail) => (
          <li key={cocktail.name}>
            <Link to="{`/spirits.${params.id}/${cocktail.name}`}">
              {cocktail.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Spirits
