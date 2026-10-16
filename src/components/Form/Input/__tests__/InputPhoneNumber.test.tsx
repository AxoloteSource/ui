import { render, screen } from '@testing-library/react'
import { Formik } from 'formik'
import { describe, expect, it } from 'vitest'
import InputPhoneNumber from '../InputPhoneNumber'

describe('InputPhoneNumber', () => {
  it('renders its label', () => {
    render(
      <Formik initialValues={{ telefono: '', codigo: '' }} onSubmit={() => {}}>
        {(formik) => <InputPhoneNumber name="telefono" nameCode="codigo" label="Teléfono" formik={formik} />}
      </Formik>
    )
    expect(screen.getByText('Teléfono')).toBeInTheDocument()
  })
})
