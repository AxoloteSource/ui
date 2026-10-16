import { render, screen } from '@testing-library/react'
import { Formik } from 'formik'
import { describe, expect, it } from 'vitest'
import TextArea from '../TextArea'

describe('TextArea', () => {
  it('renders a labelled textarea', () => {
    render(
      <Formik initialValues={{ bio: '' }} onSubmit={() => {}}>
        {(formik) => <TextArea name="bio" label="Biografía" formik={formik} />}
      </Formik>
    )
    expect(screen.getByLabelText('Biografía').tagName).toBe('TEXTAREA')
  })
})
