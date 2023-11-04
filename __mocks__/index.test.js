import { render, screen } from '@testing-library/react'
import Page from '../app/page'
import '@testing-library/jest-dom'
 
describe('Home', () => {
  it('renders a div', () => {
    render(<Page />)
 
    const heading = screen.getByRole('div', {
      name: /welcome to next\.js!/i,
    })
 
    expect(heading).toBeInTheDocument()
  })
})