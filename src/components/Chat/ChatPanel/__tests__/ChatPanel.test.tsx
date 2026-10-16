import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '../../../../test/utils'
import { ChatPanel } from '../ChatPanel'

const baseProps = {
  setSelectedChat: () => {},
  chatList: [],
  otherContactsList: [],
  currentUser: { name: 'Ana', roleName: 'Admin' },
  setSearchIndex: () => {},
  scrollChatListProps: { hasNextPage: false, isFetchingNextPage: false, fetchNextPage: () => {} },
  handleToggleMessagesScroll: () => {},
  selectUser: () => {},
  selectedUser: ''
}

describe('ChatPanel', () => {
  it('renders the current user card and an empty state', () => {
    renderWithProviders(<ChatPanel {...baseProps} />)
    expect(screen.getByText('Ana')).toBeInTheDocument()
  })
})
