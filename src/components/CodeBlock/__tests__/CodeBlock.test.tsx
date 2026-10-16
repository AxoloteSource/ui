import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { CodeBlock } from '../CodeBlock'

describe('CodeBlock', () => {
  beforeEach(() => {
    Object.assign(navigator, { clipboard: { writeText: vi.fn().mockResolvedValue(undefined) } })
  })

  it('renders inline code', () => {
    render(<CodeBlock code="npm run dev" inline />)
    expect(screen.getByText('npm run dev')).toBeInTheDocument()
  })

  it('renders a block with the detected language and a copy button', () => {
    render(<CodeBlock code="const a = 1" language="javascript" />)
    expect(screen.getByText('javascript')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /copiar/i })).toBeInTheDocument()
  })

  it('copies the code to the clipboard and shows feedback', async () => {
    render(<CodeBlock code="const a = 1" language="javascript" />)
    await userEvent.click(screen.getByRole('button', { name: /copiar/i }))
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('const a = 1')
    expect(await screen.findByRole('button', { name: /copiado/i })).toBeInTheDocument()
  })

  it('hides the copy button when showCopyButton is false', () => {
    render(<CodeBlock code="x" language="javascript" showCopyButton={false} />)
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})
