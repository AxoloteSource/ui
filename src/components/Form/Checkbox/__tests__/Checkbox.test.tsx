import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Formik } from 'formik'
import { describe, expect, it } from 'vitest'
import Checkbox from '../Checkbox'

describe('Checkbox', () => {
  it('toggles its value on click', async () => {
    render(
      <Formik initialValues={{ acepto: false }} onSubmit={() => {}}>
        {(formik) => <Checkbox name="acepto" label="Acepto" formik={formik} />}
      </Formik>
    )
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()
    await userEvent.click(checkbox)
    expect(checkbox).toBeChecked()
  })
})
