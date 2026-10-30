import React from 'react'
interface ITextAreaChatProps<T> {
  name: Extract<keyof T, string>
  placeholder?: string
  disabled?: boolean
  inputClassName?: string
  value?: string
  wrapperClassName?: string
  IconComponent?: React.ComponentType
  startAdornment?: React.ReactNode
  inputRef?: React.RefObject<HTMLTextAreaElement | null>
  inputCallback?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  inputKeyUpCallback?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void
  inputKeyDownCallback?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void
  inputSelectCallback?: (e: React.SyntheticEvent<HTMLTextAreaElement>) => void
  error?: string[]
}
export const TextAreaSendMessage = <T extends object>(props: ITextAreaChatProps<T>) => {
  const {
    inputKeyUpCallback,
    inputKeyDownCallback,
    inputSelectCallback,
    IconComponent,
    value,
    name,
    placeholder,
    wrapperClassName,
    startAdornment,
    inputRef,
    inputCallback,
    disabled = false,
    inputClassName,
    error
  } = props
  const defaultWrapperClass = 'flex items-center border p-2 rounded'
  const defaultInputClass = 'flex-1 outline-none resize-none'
  return (
    <>
      <div className={`${wrapperClassName ? wrapperClassName : defaultWrapperClass}`}>
        {startAdornment && <div className="mr-2 flex shrink-0 items-center">{startAdornment}</div>}
        <textarea
          ref={inputRef}
          value={value}
          name={name}
          disabled={disabled}
          placeholder={placeholder}
          onKeyUp={inputKeyUpCallback ? (e) => inputKeyUpCallback(e) : undefined}
          onKeyDown={inputKeyDownCallback ? (e) => inputKeyDownCallback(e) : undefined}
          onSelect={inputSelectCallback ? (e) => inputSelectCallback(e) : undefined}
          onChange={inputCallback ? (e) => inputCallback(e) : undefined}
          className={`${defaultInputClass} ${inputClassName ? inputClassName : ''}`}
        ></textarea>
        {IconComponent && <IconComponent />}
      </div>
      {error &&
        error.map((item, index) => (
          <p className="text-red-500" key={index}>
            {item}
          </p>
        ))}
    </>
  )
}
