import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import PageContainer from '../PageContainer'
import Container from '..'

describe('Containers', () => {
  it('renders children inside a grid container', () => {
    const { container } = render(
      <PageContainer>
        <span>child</span>
      </PageContainer>
    )
    expect(screen.getByText('child')).toBeInTheDocument()
    expect(container.firstChild).toHaveClass('grid', 'gap-5')
  })

  it('is re-exported as the default from the module index', () => {
    render(
      <Container>
        <span>via index</span>
      </Container>
    )
    expect(screen.getByText('via index')).toBeInTheDocument()
  })
})
