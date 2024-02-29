import { useState } from 'react'
import SpiritsData from '../data/spirits'
// import Nav from './Nav'
import { Link, Outlet } from 'react-router-dom'
import data from '../data/spirits.ts'

const listSpirits = Object.keys(data).map((key) => ({
  name: key,
}))

function App() {
  return (
    <div>
      <h1>App</h1>
      <p>React development has begun!</p>
      <ul>
        {listSpirits.map((spirit) => (
          <li key={spirit.name}>
            <Link to="{`spirits/${spirit.name}`}">{spirit.name}</Link>
          </li>
        ))}
      </ul>
      {/* <Nav />
      <Outlet /> */}
    </div>
  )
}

export default App
