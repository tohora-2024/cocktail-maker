// @vitest-environment jsdom
import { renderRoute } from './setup.tsx'
import { describe, it, expect } from 'vitest'

describe('the spirit page for gin', () => {
  it('lists cranberry gin fizz as an option', () => {
    //ARRANGE
    const screen = renderRoute('/spirits/gin')
    const heading = screen.getByRole('heading', { name: 'Cranberry Gin Fizz' })
    //ACT

    //ASSERT
    expect(heading).toBeVisible()
  })
})

// describe('')
