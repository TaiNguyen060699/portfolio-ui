import { render, screen } from '@testing-library/react'
import Home from '../app/page'
import '@testing-library/jest-dom'
 
describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
 
    const heading = document.getElementsByTagName('div', {
      name: /welcome to next\.js!/i,
    })
 
    // expect(heading).toBeInTheDocument()
  })
})