import { render, screen } from '@testing-library/react'
import { Formik } from 'formik'
import { describe, expect, it } from 'vitest'
import InputSelect from '../Select'

describe('Select', () => {
  it('renders its label and the provided options container', () => {
    render(
      <Formik initialValues={{ rol: '' }} onSubmit={() => {}}>
        {(formik) => <InputSelect name="rol" label="Rol" options={[{ value: 'admin', label: 'Admin' }]} formik={formik} />}
      </Formik>
    )
    expect(screen.getByText('Rol')).toBeInTheDocument()
  })
})
