interface IColorPickerProps<T> {
  name: keyof T & string
  label?: string
  formik: {
    values: T
    setFieldValue: (field: keyof T & string, value: string) => void
    errors?: Record<string, string | undefined>
    submitCount?: number
    touched?: Record<string, boolean | undefined>
  }
  className?: string
}

const ColorPicker = <T extends object>({ name, label, formik, className = '' }: IColorPickerProps<T>) => {
  const value = (formik.values as Record<string, string>)[name] || ''

  return (
    <div className={className}>
      {label && <label className="mb-1 block text-sm font-medium">{label}</label>}
      <div className="flex items-center gap-3">
        <div className="relative">
          <input
            type="color"
            value={value || '#000000'}
            onChange={(e) => formik.setFieldValue(name, e.target.value)}
            className="h-10 w-16 cursor-pointer rounded border border-gray-300 bg-transparent p-1"
          />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => formik.setFieldValue(name, e.target.value)}
          placeholder="#000000"
          className="h-10 flex-1 rounded-md border border-gray-300 bg-white px-3 text-sm outline-none focus:border-blue-500"
        />
        {value && <span className="inline-block h-8 w-8 flex-shrink-0 rounded-full border border-gray-300" style={{ backgroundColor: value }} />}
      </div>
      {formik.submitCount && (formik.errors as Record<string, string | undefined>)[name] ? (
        <div className="text-danger mt-1 text-xs">{String((formik.errors as Record<string, string | undefined>)[name])}</div>
      ) : null}
    </div>
  )
}

export default ColorPicker
