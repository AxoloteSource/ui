import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '../input-otp'

describe('ui InputOTP', () => {
  it('renders one slot per character', () => {
    const { container } = render(
      <InputOTP maxLength={4}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSeparator />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
    )
    expect(container.querySelectorAll('[data-input-otp]').length).toBeGreaterThan(0)
    expect(container.querySelectorAll('div.relative.flex').length).toBe(4)
    expect(container.querySelector('[role="separator"]')).toBeInTheDocument()
  })
})
