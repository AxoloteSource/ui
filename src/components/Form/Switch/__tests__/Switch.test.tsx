import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Formik } from 'formik'
import { describe, expect, it } from 'vitest'
import Switch from '../Switch'

describe('Switch', () => {
  it('renders a labelled switch and toggles on click', async () => {
    render(
      <Formik initialValues={{ activo: false }} onSubmit={() => {}}>
        {(formik) => <Switch name="activo" label="Activo" formik={formik} />}
      </Formik>
    )
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).not.toBeChecked()
    await userEvent.click(checkbox)
    expect(checkbox).toBeChecked()
  })
})
