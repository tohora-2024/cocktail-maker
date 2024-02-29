import data from '../data/spirits.ts'

const listSpirits = Object.keys(data).map((key) => ({
  name: key,
}))

function Nav() {
  return (
    <div>
      <h2>Choose</h2>
      <ul>
        {listSpirits.map((spirit) => (
          <li key={spirit.name}>{spirit.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Nav
