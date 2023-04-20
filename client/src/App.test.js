import App from './App'
import { render, screen } from '@testing-library/react'

test("testing the App", () => {
    render(<App />)
    const linkElement = screen.getByText(/learn react/i)
    expect(linkElement).toBeInTheDocument()
})