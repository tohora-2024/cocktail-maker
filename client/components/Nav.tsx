import { Link } from 'react-router-dom'
import data from '../data/spirits.ts'

const listSpirits = Object.keys(data).map((key) => ({
  name: key,
}))

function Nav() {
  return (
    <div>
      <h2>Choose from the following spirits:</h2>
      <ul>
        {listSpirits.map((spirit) => (
          <li key={spirit.name}>
            <Link to="{`spirit/${spirit.name}`}">{spirit.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Nav
