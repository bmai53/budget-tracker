import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render } from '@testing-library/react'
import App from '../App'


test('loading landing page', () => {
    const history = createMemoryHistory()
    const { container } = render(
        <Router history={history}>
            <App />
        </Router>
    )
    expect(container.innerHTML).toMatch('Welcome to Budget Tracker')
})

test('redirect to landing page', () => {
    const history = createMemoryHistory()
    const { container } = render(
        <Router history={history}>
            <App />
        </Router>
    )
    history.push('/some/random/route')
    expect(container.innerHTML).toMatch('Welcome to Budget Tracker')
})

test('unauthenticated dashboard page', () => {
    const history = createMemoryHistory()
    const { container } = render(
        <Router history={history}>
            <App />
        </Router>
    )
    history.push('/dashboard')
    expect(container.innerHTML).toMatch('You must be logged in to access this page.')
})

