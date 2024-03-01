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

describe('')

// describe('<Counter/>', () => {
// it('should increment by 1 when the user clicks the button', async () => {
//   // ARRANGE
//   render(<Counter />)
//   const user = userEvent.setup()

//   // ACT
//   const button = screen.getByRole('button', { name: 'Up!' })
//   await user.click(button)

//   // ASSERT
//   const currentCount = screen.getByText(/The count is/)
//   expect(currentCount).toHaveTextContent('The count is 1')
// })

// it('should increment by the amount in the input every time the user clicks the button', async () => {
//   render(<Counter />)
//   const user = userEvent.setup()

//   const input = screen.getByLabelText(/Increment Size/)
//   const button = screen.getByRole('button', { name: 'Up!' })
//   const currentCount = screen.getByText(/The count is/)

//   await user.clear(input)
//   await user.type(input, '5')
//   await user.click(button)
//   await user.click(button)

//   expect(currentCount).toHaveTextContent('The count is 10')
// })
// })
