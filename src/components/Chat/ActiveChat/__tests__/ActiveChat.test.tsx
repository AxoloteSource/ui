import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '../../../../test/utils'
import { ActiveChat } from '../ActiveChat'

const baseProps = {
  messages: [],
  scrollMessageListProps: { hasNextPage: false, isFetchingNextPage: false, fetchNextPage: () => {} },
  titleUserCard: 'Ana',
  subtitleUserCard: 'Admin',
  receiverId: '1',
  selectedChat: 1,
  sendMessage: async () => undefined
}

describe('ActiveChat', () => {
  it('renders the thread header and the composer by default', () => {
    renderWithProviders(<ActiveChat {...baseProps} />)
    expect(screen.getByText('Ana')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('type_message ...')).toBeInTheDocument()
  })

  it('hides the composer when readOnly', () => {
    renderWithProviders(<ActiveChat {...baseProps} readOnly />)
    expect(screen.queryByPlaceholderText('type_message ...')).not.toBeInTheDocument()
  })
})
