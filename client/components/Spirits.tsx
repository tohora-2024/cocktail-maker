import { Link, useParams } from 'react-router-dom'
import data from '../data/spirits.ts'

function Spirit() {
  const params = useParams()
  const spiritName = data[params.id as string]
  const cocktails = data.return(
    <div>
      <h2>Cocktails with {spiritName}</h2>
      <ul>
        {cocktails.map((cocktail) => (
          <li key={cocktail.name}>{cocktail.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Spirit
