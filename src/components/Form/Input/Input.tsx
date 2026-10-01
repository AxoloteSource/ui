import { Field } from 'formik'
import { Eye, EyeClosed } from 'lucide-react'
import { InfoTooltip } from './InfoTooltip'
import { InputTypeEnum } from './InputType.enum'
import useInput from './UseInput'
import { IInputProps } from './interfaces/IInputProps'

const Input = <T extends object>(props: IInputProps<T>) => {
  const {
    label,
    name,
    type = InputTypeEnum.Text,
    placeholder,
    formik,
    disabled = false,
    as,
    rows,
    className,
    autoFocus,
    iconLeft,
    onIconLeftClick,
    iconRight,
    onIconRightClick,
    tooltip
  } = props

  const { showPassword, togglePasswordVisibility, combinedClassName } = useInput({
    formik,
    name,
    className
  })

  if (type == InputTypeEnum.Hidden) {
    return <Field id={name} name={name} type={InputTypeEnum.Hidden}></Field>
  }

  return (
    <div {...(combinedClassName ? { className: combinedClassName } : {})}>
      {label && (
        <label htmlFor={name} className="flex items-center gap-1">
          {label}
          {tooltip && <InfoTooltip content={tooltip} />}
        </label>
      )}

      <div className="relative">
        {iconLeft && (
          <button
            type="button"
            onClick={onIconLeftClick}
            className="absolute inset-y-0 left-0 flex cursor-pointer items-center pl-2 text-gray-500 hover:text-gray-700"
          >
            {iconLeft}
          </button>
        )}
        <Field
          rows={rows}
          as={as ?? 'input'}
          disabled={disabled}
          name={name}
          type={type === InputTypeEnum.Password && showPassword ? InputTypeEnum.Text : type}
          id={name}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className={`form-input disabled:bg-[#eee] dark:disabled:bg-[#4b4b4b] ${iconLeft ? 'pl-10' : ''}`}
        />
        {type === InputTypeEnum.Password && (
          <span onClick={togglePasswordVisibility} className="absolute inset-y-0 right-0 flex cursor-pointer items-center px-2">
            {showPassword ? <EyeClosed /> : <Eye />}
          </span>
        )}
        {iconRight && (
          <button
            type="button"
            onClick={onIconRightClick}
            className="absolute inset-y-0 right-0 flex cursor-pointer items-center px-2 text-gray-500 hover:text-gray-700"
          >
            {iconRight}
          </button>
        )}
      </div>
      {formik.submitCount ? formik.errors[name] ? <div className="text-danger mt-1">{String(formik.errors[name])}</div> : '' : ''}
    </div>
  )
}

export default Input
