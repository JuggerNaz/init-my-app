import { screen, render } from '@testing-library/react'

import App from '../components/App'

//minimal test sample
it('Test App page component', () => {
    render(<App />)
    expect(screen.getByText(/Vite/i)).toBeVisible()
})