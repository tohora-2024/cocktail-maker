/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import ListCocktails from './components/ListCocktails'
// import Spirits from './components/Spirits'

export const routes = createRoutesFromElements([
  <Route path="/" element={<App />}>
    <Route path="/spirits/:spirit" element={<ListCocktails />} />
  </Route>,
])

const router = createBrowserRouter(routes)

export default router
