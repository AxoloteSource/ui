import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Avatar, AvatarFallback, AvatarImage } from '../avatar'

describe('ui Avatar', () => {
  it('renders the fallback when the image is not available', async () => {
    render(
      <Avatar>
        <AvatarImage src="/missing.png" alt="user" />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    )
    expect(await screen.findByText('AB')).toBeInTheDocument()
  })
})
