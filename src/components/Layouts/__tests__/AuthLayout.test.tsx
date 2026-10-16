import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import AuthLayout from '../AuthLayout/AuthLayout'

describe('AuthLayout', () => {
  it('renders its children inside the auth container', () => {
    const { container } = render(
      <AuthLayout>
        <span>login form</span>
      </AuthLayout>
    )
    expect(screen.getByText('login form')).toBeInTheDocument()
    expect(container.querySelector('.auth-layout-container')).toBeInTheDocument()
  })
})
