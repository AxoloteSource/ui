import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Typography from '../Typography'
import { TypographyVariantEnum } from '../enums/typographyVariant.enum'

describe('Typography', () => {
  it('renders the mapped tag for the variant', () => {
    render(<Typography variant={TypographyVariantEnum.H1}>Título</Typography>)
    const heading = screen.getByRole('heading', { name: 'Título', level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveClass('text-3xl')
  })

  it('renders a paragraph by default', () => {
    const { container } = render(<Typography variant={TypographyVariantEnum.P}>Texto</Typography>)
    expect(container.querySelector('p')).toBeInTheDocument()
  })

  it('applies fontBold and color modifiers', () => {
    const { container } = render(
      <Typography variant={TypographyVariantEnum.P} fontBold color="danger">
        Texto
      </Typography>
    )
    const el = container.querySelector('p') as HTMLElement
    expect(el.className).toContain('font-bold')
    expect(el.className).toContain('text-danger')
  })

  it('merges a custom className', () => {
    const { container } = render(
      <Typography variant={TypographyVariantEnum.P} className="custom-type">
        Texto
      </Typography>
    )
    expect(container.querySelector('p')).toHaveClass('custom-type')
  })
})
