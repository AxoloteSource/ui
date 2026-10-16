import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

vi.mock('../../Modal/Modal', () => ({
  default: ({ isOpen, title, children }: { isOpen: boolean; title?: string; children: React.ReactNode }) =>
    isOpen ? (
      <div role="dialog">
        <h1>{title}</h1>
        {children}
      </div>
    ) : null
}))
vi.mock('../../File/File', () => ({ default: () => <div data-testid="file-stub" /> }))

import ModalDocument from '../ModalDocument'

const baseProps = {
  url: '/doc.pdf',
  name: 'Contrato.pdf',
  close: vi.fn(),
  onClickApprove: vi.fn(),
  onClickDecline: vi.fn(),
  typeId: 1
}

describe('ModalDocument', () => {
  it('renders nothing when closed', () => {
    render(<ModalDocument {...baseProps} isOpen={false} />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders the document name and file when open', () => {
    render(<ModalDocument {...baseProps} isOpen />)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByText('Contrato.pdf')).toBeInTheDocument()
    expect(screen.getByTestId('file-stub')).toBeInTheDocument()
  })

  it('fires approve and decline handlers', async () => {
    const onClickApprove = vi.fn()
    const onClickDecline = vi.fn()
    render(<ModalDocument {...baseProps} isOpen onClickApprove={onClickApprove} onClickDecline={onClickDecline} />)

    await userEvent.click(screen.getByRole('button', { name: 'approve' }))
    await userEvent.click(screen.getByRole('button', { name: 'decline' }))
    expect(onClickApprove).toHaveBeenCalledTimes(1)
    expect(onClickDecline).toHaveBeenCalledTimes(1)
  })
})
