/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import Spirits from './components/Spirits'
import Home from './components/Home'
import Recipe from './components/Recipe'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/spirits/:id" element={<Spirits />} />
      <Route path="/spirits/:id/:cocktails" element={<Recipe />} />
    </Route>,
  ])
)

export default router
