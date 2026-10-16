import { render, screen } from '@testing-library/react'
import { type ReactElement } from 'react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import PrivateRoute from '../PrivateRoute'

const renderAt = (element: ReactElement) =>
  render(
    <MemoryRouter initialEntries={['/priv']}>
      <Routes>
        <Route path="/priv" element={element} />
        <Route path="/login" element={<div>LOGIN</div>} />
        <Route path="/403" element={<div>FORBIDDEN</div>} />
      </Routes>
    </MemoryRouter>
  )

describe('PrivateRoute', () => {
  it('redirects to login when not authenticated', () => {
    renderAt(<PrivateRoute isAuthenticated={false} element={<div>SECRET</div>} />)
    expect(screen.getByText('LOGIN')).toBeInTheDocument()
    expect(screen.queryByText('SECRET')).not.toBeInTheDocument()
  })

  it('renders the element when authenticated', () => {
    renderAt(<PrivateRoute isAuthenticated element={<div>SECRET</div>} />)
    expect(screen.getByText('SECRET')).toBeInTheDocument()
  })

  it('redirects to forbidden when the permission check fails', () => {
    renderAt(<PrivateRoute isAuthenticated user={{ role: 'user' }} hasPermission={() => false} element={<div>SECRET</div>} />)
    expect(screen.getByText('FORBIDDEN')).toBeInTheDocument()
  })
})
