// import { vodka, gin, brandy, whiskey, rum } from '../data/spiritsdata.ts'
import { useParams } from 'react-router-dom'
import * as data from '../data/spiritsdata.ts'
import { Cocktail } from '../data/spiritsdata.ts'

interface Props extends Cocktail {}

const OneCocktail = (cocktail: Props) => {
  return (
    <div className="display">
      <h3 className="cocktail-name-heading">{cocktail.name}</h3>
      <p className="cocktails-p">
        <strong>Ingredients:</strong> {cocktail.ingredients}
      </p>
      <p className="cocktails-p">
        <strong>Instructions:</strong> {cocktail.instructions}
      </p>
    </div>
  )
}

const ListCocktails = () => {
  const { spirit } = useParams()
  if (spirit == undefined || !(spirit in data)) {
    throw new Error()
  }
  const cocktails = data[spirit as keyof typeof data]
  return (
    <ul className="ul">
      {cocktails.map((cocktail) => {
        return (
          <li key={cocktail.name}>
            <OneCocktail {...cocktail} />
          </li>
        )
      })}
    </ul>
  )
}

export default ListCocktails
