import { useState } from 'react'
import SpiritsData from '../data/spirits'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <h1>App</h1>
      <p>React development has begun!</p>
      <Nav />
      <Outlet />
    </div>
  )
}

export default App
