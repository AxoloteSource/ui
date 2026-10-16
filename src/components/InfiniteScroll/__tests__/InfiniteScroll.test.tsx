import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { InfiniteScroll } from '../InfiniteScroll'

describe('InfiniteScroll', () => {
  it('renders its children', () => {
    render(
      <InfiniteScroll onLoadMore={() => {}}>
        <span>item</span>
      </InfiniteScroll>
    )
    expect(screen.getByText('item')).toBeInTheDocument()
  })

  it('shows the loading label while fetching the next page', () => {
    render(
      <InfiniteScroll onLoadMore={() => {}} isFetchingNextPage>
        <span>item</span>
      </InfiniteScroll>
    )
    expect(screen.getByText('load_more')).toBeInTheDocument()
  })
})
