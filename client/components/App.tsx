// import { useState } from 'react'
// import SpiritsData from '../data/spirits'
// import Nav from './Nav'
import { Link, Outlet } from 'react-router-dom'
import * as data from '../data/spiritsdata.ts'

const listSpirits = Object.keys(data).map((key) => ({
  name: key,
}))

function App() {
  return (
    <div className="app-container">
      <img
        src="../public/cocktail-glasses.png"
        alt="cocktail-glass"
        className="cocktail-glass-image"
      />
      <h1 className="app-heading">Let us Make Some Cocktails!</h1>
      <p>Choose a spirit to see some cocktail recipes!</p>
      <div className="spirits-container">
        {listSpirits.map((spirit) => (
          <Link key={spirit.name} to={`spirits/${spirit.name}`}>
            <button className="spirit-button">
              {' '}
              {spirit.name.toUpperCase()}
            </button>
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  )
}

export default App
