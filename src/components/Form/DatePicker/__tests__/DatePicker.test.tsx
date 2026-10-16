import { screen } from '@testing-library/react'
import { Formik } from 'formik'
import { describe, expect, it } from 'vitest'
import { renderWithProviders } from '../../../../test/utils'
import { DatePicker } from '../DatePicker'

describe('DatePicker', () => {
  it('renders the label and a date trigger button', () => {
    renderWithProviders(
      <Formik initialValues={{ fecha: null }} onSubmit={() => {}}>
        {(formik) => <DatePicker name="fecha" label="Fecha" formik={formik} />}
      </Formik>
    )
    expect(screen.getByText('Fecha')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
