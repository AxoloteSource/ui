import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Formik } from 'formik'
import { describe, expect, it } from 'vitest'
import Input from '../Input'
import { InputTypeEnum } from '../InputType.enum'

describe('Input', () => {
  it('renders the label and accepts typing', async () => {
    render(
      <Formik initialValues={{ nombre: '' }} onSubmit={() => {}}>
        {(formik) => <Input name="nombre" label="Nombre" placeholder="Escribe" formik={formik} />}
      </Formik>
    )
    const input = screen.getByLabelText('Nombre') as HTMLInputElement
    await userEvent.type(input, 'abc')
    expect(input.value).toBe('abc')
  })

  it('renders a password toggle', async () => {
    render(
      <Formik initialValues={{ pass: '' }} onSubmit={() => {}}>
        {(formik) => <Input name="pass" label="Contraseña" type={InputTypeEnum.Password} formik={formik} />}
      </Formik>
    )
    const input = screen.getByLabelText('Contraseña') as HTMLInputElement
    expect(input.type).toBe('password')
  })
})
