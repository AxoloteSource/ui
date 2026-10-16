import { describe, expect, it, vi } from 'vitest'
import { AlertTypeEnum } from '../../../enums/types/AlertTypeEnum'

const mocks = vi.hoisted(() => {
  const fire = vi.fn(() => Promise.resolve({ isConfirmed: true }))
  const mixinChain: { fire: typeof fire; mixin: ReturnType<typeof vi.fn> } = { fire, mixin: vi.fn() }
  mixinChain.mixin.mockReturnValue(mixinChain)
  const mixin = vi.fn(() => mixinChain)
  return { fire, mixin, mixinChain }
})

vi.mock('sweetalert2', () => ({ default: { fire: mocks.fire, mixin: mocks.mixin } }))

import { alertSwal } from '../AlertSwal'

describe('AlertSwal', () => {
  it('fires a success alert with the given title/text', () => {
    alertSwal({ type: AlertTypeEnum.Success, title: 'OK', text: 'hecho' })
    expect(mocks.fire).toHaveBeenCalledWith(expect.objectContaining({ icon: 'success', title: 'OK', text: 'hecho' }))
  })

  it('uses a default title when none is provided', () => {
    alertSwal({ type: AlertTypeEnum.Error })
    expect(mocks.fire).toHaveBeenCalledWith(expect.objectContaining({ icon: 'error', title: 'Error' }))
  })

  it('confirm asks for a cancel button and returns the Swal promise', () => {
    const result = alertSwal({ type: AlertTypeEnum.Confirm })
    expect(mocks.fire).toHaveBeenCalledWith(expect.objectContaining({ showCancelButton: true, icon: 'warning' }))
    expect(result).toBeInstanceOf(Promise)
  })

  it('success notification goes through the toast mixin', () => {
    alertSwal({ type: AlertTypeEnum.SuccessNotification })
    expect(mocks.mixin).toHaveBeenCalled()
    expect(mocks.mixinChain.fire).toHaveBeenCalled()
  })
})
