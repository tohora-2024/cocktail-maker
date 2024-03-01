import { beforeEach, expect } from 'vitest'
import { cleanup, render } from '@testing-library/react/pure'
import * as matchers from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom/vitest'
import { routes } from '../router.tsx'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'

export function renderRoute(path = '/') {
  const router = createMemoryRouter(routes, { initialEntries: [path] })
  return render(<RouterProvider router={router} />)
}

beforeEach(cleanup)
expect.extend(matchers)
