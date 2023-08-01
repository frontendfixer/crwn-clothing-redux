/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import Button from '../button.component'

describe('button tests', () => {
  test('should render base button when nothing is passed', () => {
    render(<Button>Test</Button>)

    const buttonel = screen.getByText(/test/i)
    expect(buttonel).toHaveStyle('background-color:black')
  })
})
