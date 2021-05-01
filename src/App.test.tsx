import { render, screen } from '@testing-library/react'
import React from 'react'
import App from './App'

describe('App', () => {
  it('should display header text', async () => {
    render(<App />)
    expect(screen.getByText('Hello Vite + React!')).toBeTruthy()
  })
})
