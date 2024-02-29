/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import App from './components/App'
import ListCocktails from './components/ListCocktails'
// import Spirits from './components/Spirits'

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />}>
      <Route path="/spirits/:spirit" element={<ListCocktails />} />
    </Route>,
  ])
)

export default router
